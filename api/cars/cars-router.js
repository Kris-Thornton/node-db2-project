const router = require('express').Router()
const Car = require('./cars-model')







router.get('./', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    }catch (err) {
        next({ status: 402, message: 'not working'})
    }
})
router.get('./:id', (req, res, next) => {

})
router.post('./', (req, res, next) => {

})

module.exports = router;