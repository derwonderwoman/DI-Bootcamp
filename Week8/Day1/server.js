const express = require("express");
const { products } = require("./config/data.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log("run on 3001");
});

/**
 * CRUD - Create, Read, Update, Delete
 * app.get - GET - retrieve data
 * app.post - POST send new data
 * app.delete - DELETE delete data
 * app.put - PUT modify data
 */

app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id == id);
  if (index === -1) {
    return res.status(404).json({ msg: "not found" });
  }
  products.splice(index, 1);
  res.json(products);
});

/** Update - PUT - modify a product
 * id -> params
 * data -> name, price -> json in body
 *
 */
app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ msg: "not found" });
  }

  products[index] = {
    ...products[index],
    name,
    price,
  };

  res.json(products);
});

/** Create - POST - to create a new product */
app.post("/api/products", (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.json(products);
});

/** Read - get - get all products */
app.get("/api/products", (req, res) => {
  res.json(products);
});

/** Read - get - get on product with the id */
app.get("/api/products/:id", (req, res) => {
  // console.log(req.params)
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.sendStatus(404);
  }
  res.status(200).json(product);
});

/** Read -get - search for a product with the name
 * name includes -
 */
app.get("/api/search", (req, res) => {
  const { q } = req.query;
  const filterd = products.filter((item) => {
    return item.name.toLowerCase().includes(q.toLowerCase());
  });
  if (filterd.length === 0) {
    return res.status(404).json({ msg: "no product matched your search" });
  }
  res.status(200).json(filterd);
});