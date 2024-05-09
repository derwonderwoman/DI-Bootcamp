const knex = require("knex");
require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});

const products = [
  { id: 102, name: "iPhone", price: 800 },
  { id: 132, name: "iPad", price: 650 },
  { id: 213, name: "iWatch", price: 750 },
];

const users = [
  { id: 102, name: "John", email: "jj@gmail.com" },
  { id: 132, name: "Anne", price: "aaa@gmail.com" },
  { id: 213, name: "Dan", price: "ddd@gmail.com" },
];

module.exports = {
  products,
  users,
  db,
};
