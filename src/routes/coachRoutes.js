const controller = require('../controllers/coachController')
const express = require('express')

const router = express.Router()

router.post('/treinador', controller.createCoach)
router.get('/treinadores', controller.findAllCoaches)
router.get('/treinadores/:id', controller.findCoachById)
router.get('/treinador/:name', controller.findCoachByName)
router.patch('/treinador/:id', controller.updateCoach)
router.delete('/treinador/:id', controller.deleteCoach)
router.patch('pokemon/:id', controller.updateCoach)


module.exports = router