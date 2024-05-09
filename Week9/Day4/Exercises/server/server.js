const express = require("express");
const product_router = require("./routes/products.route.js");
const users_router = require("./routes/users.route.js");
const { logger, auth } = require("./middlewares/utils.js");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log("run on 3001");
});

/**
 * Middleware - function - request -> middleware -> response
 */

// app.use(auth);
app.use("/users", logger);
app.use(cors());
app.use("/api/products", product_router);
app.use("/users", users_router);

/**
 *  server
 *    |_ config - connection to databases
 *    |_ models - queries to database/files
 *    |_ controllers - function implements code - request, response
 *    |_ routes - route for api
 */

/**
 * CRUD - Create, Read, Update, Delete
 * app.get - GET - retrieve data
 * app.post - POST send new data
 * app.delete - DELETE delete data
 * app.put - PUT modify data
 */

/**
 * get user by id
 *
 */
