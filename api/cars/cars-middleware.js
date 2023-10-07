const Car = require('./cars-model');
const db = require('../../data/db-config');



const checkCarId = async (req, res, next) => {
  try {
    const error = { status: 400 }
    const car = await Car.getById(req.params.id)
    if(!car) {
      error.message = 'not working'
    }else{
      next()
    }
}catch (err) {
    next(err)
}
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}



module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}