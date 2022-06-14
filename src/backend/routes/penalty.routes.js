const Router = require('express')
const router = new Router()
const penaltyController = require('../controller/penalty.controller')

router.post('/penalty', penaltyController.createPenalty)
router.get('/penalty', penaltyController.getPenaltyByUser)

module.exports = router