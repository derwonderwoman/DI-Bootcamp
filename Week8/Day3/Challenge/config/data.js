const knex = require('knex')
require('dotenv').config()

const { CONNECTION_STRING } = process.env

const db = knex({
    client: 'pg',
    connection: {
        connectionString: CONNECTION_STRING,
        ssl:{rejectUnauthorized:false}
}});

module.exports = {
    db
}