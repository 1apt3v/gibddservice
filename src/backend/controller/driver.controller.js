const db = require('./../db')

class DriverController {
    async createDriver(req, res) {
        const { first_name, second_name, patronymic } = req.body
        const newDriver = await db.query('INSERT INTO driver (id_driver_license, first_name, second_name, patronymic, birthday) values ($1, $2, $3, $4, $5) RETURNING *', [id_driver_license, first_name, second_name, patronymic, birthday])

        res.json(newDriver.rows[0])
    }
    // async getDrivers(req, res) {
    //     const drivers = await db.query('SELECT * FROM driver')
    //     res.json(drivers.rows)
    // }
    async getOneDriver(req, res) {
        const id = req.query.id
        const newId = String(id)
        const series = newId.substr(0, 4)
        const number = newId.substr(4)
        // console.log(series, number, 'qqqqqqqqqqqqq')
        const driver = await db.query(
            `SELECT driver.id_driver, driver.id_driver_license, driver.birthday, driver.path_img, 
            driver.first_name, driver.second_name, driver.patronymic, driver_license.document_series, driver_license.document_number FROM driver 
            FULL JOIN driver_license ON driver_license.id_driver_license = driver.id_driver_license
            where driver_license.document_series = $1 AND driver_license.document_number = $2;`,
            [series, number]
        )

        if(driver.rows.length === 0) {
            return res.json({message: '404'})
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
            insurance.amount, insurance.effective_date, insurance.end_data,
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

        console.log('resultObject', resultObject)
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
        const driver = await db.query('DELETE FROM driver where id_driver_license = $1', [id_driver_license])
        res.json(driver.rows[0])
    }

}


module.exports = new DriverController()