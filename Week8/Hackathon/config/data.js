const knex = require ("knex");
const dotenv = require ("dotenv");
dotenv.config();

const connection_string = process.env.connection_string;

const db = knex({
    client:'pg',
    connection:{
        connectionString:connection_string,
        ssl:{rejectUnauthorized:false}
    },
});

module.exports = db;