const Router = require('express')
const router = new Router()
const driverController = require('./../controller/driver.controller')


router.post('/test', driverController._testTransaction)
router.post('/driver', driverController.createDriver)
router.get('/driverLicenses', driverController.getDrivers)
router.get('/driver/', driverController.getOneDriver)
router.put('/driver', driverController.updateDriver)
router.delete('/driver/:id', driverController.deleteDriver)


module.exports = router