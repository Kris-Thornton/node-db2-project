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
        vin: '3333333333334',
        make: 'chevy',
        model: 'impala',
        mileage: 197412,
        title: 'clean',
        transmission: 'automatic',
    },
]


exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}