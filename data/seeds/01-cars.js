// STRETCH

const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '2222222222222',
        make: 'ford',
        model: 'mustang',
        mileage: 357654,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '3333333333333',
        make: 'chevy',
        model: 'impala',
        mileage: 197412,
        title: 'clean',
        transmission: 'automatic',
    },
]


exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(() => {
        return knex('cars').insert(cars)
    })
    
}