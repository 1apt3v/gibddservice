const db = require('./../db')

class DriverController {
    async createDriver(req, res) {
        const { driver_license, driver, registration_number, vehicle, insurance } = req.body

        const check = await db.query(
            `SELECT EXISTS (SELECT * FROM driver_license WHERE document_series = $1 AND document_number = $2)`,
            [driver_license.document_series, driver_license.document_number]
        )

        if (check.rows[0].exists === true) {
            console.log('DRIVER EXISTS')
            res.json(check.rows[0].exists)
            return
        } else {
            console.log('DRIVER NOT EXISTS')
            const createNewDriverLincense = await db.query(
                `INSERT INTO driver_license (document_series, document_number, сity_of_receipt, effective_date, end_date, department_code)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING id_driver_license`,
                [
                    driver_license.document_series,
                    driver_license.document_number,
                    driver_license.city_of_receipt,
                    driver_license.effective_date,
                    driver_license.end_date,
                    driver_license.department_code
                ]
            )
            const newDriverLicenseId = createNewDriverLincense.rows[0].id_driver_license

            const createNewDriver = await db.query(
                `INSERT INTO driver (id_driver_license, first_name, second_name, patronymic, birthday) 
                VALUES ($1, $2, $3, $4, $5)
                RETURNING id_driver`,
                [
                    newDriverLicenseId,
                    driver.first_name,
                    driver.second_name,
                    driver.patronymic,
                    driver.birthday,
                ]
            )
            const newDriverId = createNewDriver.rows[0].id_driver

            const createNewRegistrationNumber = await db.query(
                `INSERT INTO registration_number (registration_number, registration_region)
                VALUES ($1, $2)
                RETURNING id_registration_number`,
                [
                    registration_number.registration_number,
                    registration_number.registration_region
                ]
            )
            const newRegistrationNumberId = createNewRegistrationNumber.rows[0].id_registration_number

            const createNewVehicle = await db.query(
                `INSERT INTO vehicle (vin, brand, model, color, id_registration_number)
                VALUES ($1, $2, $3, $4, $5)
                RETURNING id_vehicle`,
                [
                    vehicle.vin,
                    vehicle.brand,
                    vehicle.model,
                    vehicle.color,
                    newRegistrationNumberId
                ]
            )
            const newVehicleId = createNewVehicle.rows[0].id_vehicle

            const createNewInsurance = await db.query(
                `INSERT INTO insurance (id_vehicle, id_driver, document_series, document_number, policyholder, effective_date, end_date, amount)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
                RETURNING id_insurance`,
                [
                    newVehicleId,
                    newDriverId,
                    insurance.document_series,
                    insurance.document_number,
                    insurance.policyholder,
                    insurance.effective_date,
                    insurance.end_date,
                    insurance.amount
                ]
            )
            const newInsuranceId = createNewInsurance.rows[0].id_insurance

            res.json(true)
        }


    }
    async getDrivers(req, res) {
        const driversLicense = await db.query('select concat(document_series, document_number) from driver_license;')
        res.json(driversLicense.rows)
    }
    async getOneDriver(req, res) {
        const id = req.query.id
        const newId = String(id)
        const series = newId.substr(0, 4)
        const number = newId.substr(4)
        if (series === '' || number === '') {
            return res.json({ message: '404' })
        }

        // console.log(series, number, 'qqqqqqqqqqqqq')
        const driver = await db.query(
            `SELECT driver.id_driver, driver.id_driver_license, driver.birthday, driver.path_img, 
            driver.first_name, driver.second_name, driver.patronymic, driver_license.document_series, driver_license.document_number FROM driver 
            FULL JOIN driver_license ON driver_license.id_driver_license = driver.id_driver_license
            where driver_license.document_series = $1 AND driver_license.document_number = $2;`,
            [series, number]
        )

        if (driver.rows.length === 0) {
            return res.json({ message: '404' })
        }


        const driver_license = await db.query(
            `SELECT * FROM driver_license 
            LEFT JOIN driver ON driver_license.id_driver_license = driver.id_driver_license
            where driver_license.document_series = $1 AND driver_license.document_number = $2;`,
            [series, number]
        )
        const id_driver = driver_license.rows[0].id_driver
        const insurance = await db.query(
            `SELECT insurance.document_series, insurance.document_number, insurance.policyholder, 
            insurance.amount, insurance.effective_date, insurance.end_date,
            driver.id_driver, insurance.id_driver, insurance.id_vehicle FROM insurance 
            LEFT JOIN driver ON driver.id_driver = insurance.id_driver 
            where driver.id_driver = $1`,
            [id_driver]
        )

        const vehicle = await db.query(
            `SELECT vehicle.id_vehicle, vehicle.id_registration_number, vehicle.vin, vehicle.brand, vehicle.model, 
            vehicle.color, vehicle.path_img, insurance.id_vehicle, insurance.id_driver, vehicle.id_registration_number, registration_number.registration_number, 
            registration_number.registration_region FROM vehicle

            FULL JOIN insurance ON insurance.id_vehicle = vehicle.id_vehicle
            FULL JOIN registration_number ON vehicle.id_registration_number = registration_number.id_registration_number 
            where insurance.id_driver = $1`,
            [id_driver]
        )

        const resultObject = {
            driver: { ...driver.rows[0] },
            driver_license: { ...driver_license.rows[0] },
            insurance: { ...insurance.rows[0] },
            vehicle: { ...vehicle.rows[0] }
        }

        // console.log('resultObject', resultObject)
        res.json(resultObject)

        // FULL JOIN vehicle ON vehicle.id_vehicle = insurance.id_vehicle
    }
    async updateDriver(req, res) {
        const { id_driver_license, first_name, second_name, patronymic, birthday } = req.body
        const driver = await db.query(
            'UPDATE driver set first_name = $2, second_name = $3, patronymic = $4, birthday = $5 where id_driver_license = $1 RETURNING *',
            [id_driver_license, first_name, second_name, patronymic, birthday]
        )
        res.json(driver.rows[0])
    }
    async deleteDriver(req, res) {
        const id_driver_license = req.params.id

        const checkDriver = await db.query(
            `
            SELECT COUNT(id_driver_license) FROM driver_license WHERE CONCAT(document_series, document_number) = $1
            `,
            [id_driver_license]
        )

        if (checkDriver.rows[0].count = 1) {
            console.log('deleteDriver: driver exist')
            const id_driver = await db.query(
                `
                SELECT id_driver FROM driver WHERE id_driver_license = (
                    SELECT id_driver_license FROM driver_license WHERE CONCAT(document_series, document_number) = $1
                )
                `,
                [id_driver_license]
            )


            const insurance = db.query(
                `
                DELETE FROM insurance WHERE id_driver = $1 
                RETURNING *
                `,
                [id_driver.rows[0].id_driver]
            )

            const driver = await db.query(
                `
                DELETE FROM driver WHERE id_driver = $1 
                RETURNING *;
                `,
                [id_driver.rows[0].id_driver]
            )
            const driver_license = await db.query(
                `
                DELETE FROM driver_license WHERE CONCAT(document_series, document_number) = $1
                RETURNING *;
                `,
                [id_driver_license]
            )

            const result = { ...driver.rows[0], ...driver_license.rows[0], ...insurance.rows[0] }
            console.log(driver.rows)
            res.json(result)
        } else {
            console.log('deleteDriver: driver not exist')
            return res.json({ message: '404' })
        }



    }

}


module.exports = new DriverController()