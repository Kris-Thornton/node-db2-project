const express = require('express')
const router = express.Router()
const md = require('./cars-middleware')
const Car = require('./cars-model')
const {
    checkCarId
} = require('./cars-middleware')






router.get('/',  async (req, res, next) => {
    try {
       
        const cars = await Car.getAll()
        res.json(cars)
    }catch (err) {
        next(err)
    }
})



router.get('/:id', checkCarId, async (req, res, next) => {
    res.json(req.car)
})




router.post('/', (req, res, next) => {
    res.json('posting new car')
})

module.exports = router;