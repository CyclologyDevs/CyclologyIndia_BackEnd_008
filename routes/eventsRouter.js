const event_controller = require('../controllers/eventcontroller')

const router = require('express').Router()


router.get(`/event00001`, event_controller.event00001);
router.get('/event00002', event_controller.event00002);
router.get('/event_may750', event_controller.event_may750);


module.exports = router;