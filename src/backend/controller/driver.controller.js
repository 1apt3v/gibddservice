const db = require('./../db')

class DriverController {


    /*
        Тестирование транзакция
    */

    async _testTransaction(req, res) {
        const { documentSeries, someInfo } = req.body
        console.log(documentSeries, someInfo)

        try {
            await db.query('BEGIN')
            const idParentTest = await db.query('INSERT INTO test(document_series) VALUES ($1) RETURNING id', [documentSeries])

            const newIdParentTest = idParentTest.rows[0].id

            await db.query('INSERT INTO testchild(id_parent_test, some_info) VALUES ($1, $2) RETURNING id_child', [newIdParentTest, someInfo])
            await db.query('COMMIT')
            console.log('COMMIT')
        } catch (error) {
            db.query('ROLLBACK')
            console.error('ROLLBACK')
            throw error
        }
        res.json(true)
    }




    /*
        Метод создания данных пользователя
    */
    async createDriver(req, res) {
        const { driver_license, driver, registration_sign, vehicle, insurance } = req.body

        console.log(req.body)

        // if(driver_license) {
            
        // }


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

            // Проверка
            

            // Транзакция

            try {
                await db.query('BEGIN')

                const createNewDriverLincense = await db.query(
                    `INSERT INTO driver_license (document_series, document_number, сity_of_receipt, effective_date, end_date, department_code)
                    VALUES ($1, $2, $3, $4, $5, $6)
                    RETURNING id`,
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

                if (registration_sign) {
                    console.log(registration_sign)
                }



            } catch (err) {

            }










            // const createNewRegistrationNumber = await db.query(
            //     `INSERT INTO registration_number (registration_number, registration_region)
            //     VALUES ($1, $2)
            //     RETURNING id_registration_number`,
            //     [
            //         registration_sign.registration_number,
            //         registration_sign.registration_region
            //     ]
            // )
            // const newRegistrationNumberId = createNewRegistrationNumber.rows[0].id_registration_number

            // const createNewVehicle = await db.query(
            //     `INSERT INTO vehicle (vin, brand, model, color, id_registration_number)
            //     VALUES ($1, $2, $3, $4, $5)
            //     RETURNING id_vehicle`,
            //     [
            //         vehicle.vin,
            //         vehicle.brand,
            //         vehicle.model,
            //         vehicle.color,
            //         newRegistrationNumberId
            //     ]
            // )
            // const newVehicleId = createNewVehicle.rows[0].id_vehicle

            // const createNewInsurance = await db.query(
            //     `INSERT INTO insurance (id_vehicle, id_driver, document_series, document_number, policyholder, effective_date, end_date, amount)
            //     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            //     RETURNING id_insurance`,
            //     [
            //         newVehicleId,
            //         newDriverId,
            //         insurance.document_series,
            //         insurance.document_number,
            //         insurance.policyholder,
            //         insurance.effective_date,
            //         insurance.end_date,
            //         insurance.amount
            //     ]
            // )
            // const newInsuranceId = createNewInsurance.rows[0].id_insurance

            res.json(true)
        }


    }

    /*
        Метод получения данных всех пользователей
    */
    async getDrivers(req, res) {
        const driversLicense = await db.query('select concat(document_series, document_number) from driver_license;')
        res.json(driversLicense.rows)
    }

    /*
        Метод получения данных одного пользователя
    */
    async getOneDriver(req, res) {
        const id = req.query.id
        const newId = String(id)
        const series = newId.substr(0, 4)
        const number = newId.substr(4)
        if (series === '' || number === '') {
            return res.json({ message: 'Пустое поле' })
        }

        // console.log(series, number, 'qqqqqqqqqqqqq')
        const driver = await db.query(
            `SELECT driver.id_driver, driver.id_driver_license, driver.birthday, driver.path_img, 
            driver.first_name, driver.second_name, driver.patronymic, driver_license.document_series, driver_license.document_number FROM driver 
            FULL JOIN driver_license ON driver_license.id_driver_license = driver.id_driver_license
            where driver_license.document_series = $1 AND driver_license.document_number = $2 AND driver.deleted = false AND driver_license.deleted = false;`,
            [series, number]
        )

        if (driver.rows.length === 0) {
            return res.json({ message: '404' })
        }


        const driver_license = await db.query(
            `SELECT * FROM driver_license 
            LEFT JOIN driver ON driver_license.id_driver_license = driver.id_driver_license
            where driver_license.document_series = $1 AND driver_license.document_number = $2 AND driver_license.deleted = false;`,
            [series, number]
        )
        const id_driver = driver_license.rows[0].id_driver
        const insurance = await db.query(
            `SELECT insurance.document_series, insurance.document_number, insurance.policyholder, 
            insurance.amount, insurance.effective_date, insurance.end_date,
            driver.id_driver, insurance.id_driver, insurance.id_vehicle FROM insurance 
            LEFT JOIN driver ON driver.id_driver = insurance.id_driver 
            where driver.id_driver = $1 AND insurance.deleted = false`,
            [id_driver]
        )

        const vehicle = await db.query(
            `SELECT vehicle.id_vehicle, vehicle.id_registration_number, vehicle.vin, vehicle.brand, vehicle.model, 
            vehicle.color, vehicle.path_img, insurance.id_vehicle, insurance.id_driver, vehicle.id_registration_number, registration_number.registration_number, 
            registration_number.registration_region FROM vehicle

            FULL JOIN insurance ON insurance.id_vehicle = vehicle.id_vehicle
            FULL JOIN registration_number ON vehicle.id_registration_number = registration_number.id_registration_number 
            where insurance.id_driver = $1 AND vehicle.deleted = false`,
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

    /*
        Метод обновления данных о пользователе
    */
    async updateDriver(req, res) {
        const { id_driver_license, first_name, second_name, patronymic, birthday } = req.body
        const driver = await db.query(
            'UPDATE driver set first_name = $2, second_name = $3, patronymic = $4, birthday = $5 where id_driver_license = $1 RETURNING *',
            [id_driver_license, first_name, second_name, patronymic, birthday]
        )
        res.json(driver.rows[0])
    }

    /*
        Метод удаления данных о пользователе
    */
    async deleteDriver(req, res) {
        const id_driver_license = req.params.id

        const checkDriver = await db.query(
            `
            SELECT COUNT(id_driver_license) FROM driver_license WHERE CONCAT(document_series, document_number) = $1
            `,
            [id_driver_license]
        ) // Смотрим, существует ли пользователь с id_driver_license в БД и выводим количество записей

        //"должно быть >=, потому что может быть ошибка записи, при которой будет добавлено множество пользователей и это надо отслеживать"
        if (checkDriver.rows[0].count = 1) {
            console.log('deleteDriver: driver exist')
            const id_driver = await db.query( // Получение идентификатора
                `
                SELECT id_driver FROM driver WHERE id_driver_license = (
                    SELECT id_driver_license FROM driver_license WHERE CONCAT(document_series, document_number) = $1
                )
                `,
                [id_driver_license]
            )
            console.log('id_driver complete')


            // const insurance = await db.query( // Удаление данных в таблице insurance
            //     `
            //     DELETE FROM insurance WHERE id_driver = $1 
            //     RETURNING *;
            //     `,
            //     [id_driver.rows[0].id_driver]
            // )
            // console.log('insurance delete')

            // const driver = await db.query( // Удаление данных в таблице driver
            //     `
            //     DELETE FROM driver WHERE id_driver = $1 
            //     RETURNING *;
            //     `,
            //     [id_driver.rows[0].id_driver]
            // )
            // console.log('driver delete')

            // const driver_license = await db.query( // Удаление данных в таблице driver_license
            //     `
            //     DELETE FROM driver_license WHERE CONCAT(document_series, document_number) = $1
            //     RETURNING *;
            //     `,
            //     [id_driver_license]
            // )
            // console.log('driver_license delete')

            // console.log('driver:', driver.rows)
            // console.log('driver_license:', driver_license.rows)
            // console.log('insurance:', insurance.rows)



            // Реализация через транзакцию

            const transaction = await db.query(
                `
                BEGIN;

                DELETE FROM insurance WHERE id_driver = $1;
                SAVEPOINT delete_insurance;
                
                DELETE FROM driver WHERE id_driver = $1;
                SAVEPOINT delete_driver;
               
                DELETE FROM driver_license WHERE CONCAT(document_series, document_number) = $2;
                SAVEPOINT delete_driver_license;

                COMMIT;
                `,
                [id_driver.rows[0].id_driver, id_driver_license]
            )








            // const result = { ...driver.rows[0], ...driver_license.rows[0], ...insurance.rows[0] }
            const result = { ...transaction.rows[0] }
            console.log(result)
            // res.json(result)
            res.json({ status: true })
        } else {
            console.log('deleteDriver: driver not exist')
            return res.json({ message: '404' })
        }



    }

}


module.exports = new DriverController()