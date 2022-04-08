const router = require('express').Router()
const controller = require('../controller/Rating.controller')

router.route('/').get(controller.getAll)

router.route('/:id').get(controller.getById)

router.route('/teacher/:id').get(controller.getRatingByTeacher)

router.route('/').post(controller.create)

router.route('/:id').put(controller.update)

router.route('/:id').delete(controller.deleteById)

module.exports = router
