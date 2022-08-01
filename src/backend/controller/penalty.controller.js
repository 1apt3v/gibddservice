const db = require('./../db')

class PenaltyController {
    async createPenalty(req, res) {
        console.log(req.body)
        const { violation, penalty_location, number_vehicle, color_vehicle, penalty_date, amount, id_driver } = req.body
        const newPenalty = await db.query(
            'INSERT INTO penalty (violation, penalty_location, number_vehicle, color_vehicle, penalty_date, amount, id_driver) values ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [violation, penalty_location, number_vehicle, color_vehicle, penalty_date, amount, id_driver]
        )
        res.json(newPenalty.rows[0])
    }

    async getPenaltyByUser(req, res) {
        const id = req.query.id
        const newId = String(id)
        const series = newId.substr(0, 4)
        const number = newId.substr(4)

        if (series === '' || number === '') {
            return res.json({ message: '404' })
        }

        const penalty = await db.query(
            `SELECT penalty.id_penalty, penalty.id_driver_license, penalty.id_vehicle, penalty.violation, 
            penalty.penalty_location, penalty.penalty_date, penalty.amount, driver_license.id_driver_license, 
            driver_license.document_series, driver_license.document_number, vehicle.id_registration_number, 
            registration_number.registration_number, registration_number.registration_region FROM penalty 
            FULL JOIN driver_license ON driver_license.id_driver_license = penalty.id_driver_license
            FULL JOIN vehicle ON penalty.id_vehicle = vehicle.id_vehicle
            FULL JOIN registration_number ON registration_number.id_registration_number = vehicle.id_registration_number
            where driver_license.document_series = $1 AND driver_license.document_number = $2;`,
            [series, number]
        )

        if (penalty.rows.length === 0) {
            return res.json({ message: '404' })
        }

        console.log(penalty.rows)

        res.json(penalty.rows)
    }
}

module.exports = new PenaltyController()