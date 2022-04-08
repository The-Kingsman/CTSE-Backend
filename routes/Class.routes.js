const router = require('express').Router()
const controller = require('../controller/Class.controller')

router.route('/').get(controller.getAll)

router.route('/:id').get(controller.getById)

router.route('/').post(controller.create)

router.route('/:id').put(controller.update)

router.route('/:id').delete(controller.deleteById)

router.route('/teacher/:id').get(controller.getByTeacher)

module.exports = router
