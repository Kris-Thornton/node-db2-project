const express = require("express");
const carsRouter = require('./cars/cars-router');
const server = express();


server.use('/api/cars', carsRouter);


server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Server Error, Not Found',
    })
})

module.exports = server
