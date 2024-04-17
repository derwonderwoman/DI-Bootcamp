import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

const connection_string = process.env.CONNECTION_STRING;

export const db = knex({
    client:'pg',
    connection:{
        connectionString:connection_string,
        ssl:{rejectUnauthorized:false}
    },
});