const { db } = require("../config/data.js");

const _getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("id");
};

const _getProductById = (product_id) => {
  return db("products").select("id", "name", "price").where({ id: product_id });
};

const _createProduct = (name, price) => {
  return db("products").insert({ name, price }, ["id", "name", "price"]);
};

module.exports = {
  _getAllProducts,
  _getProductById,
  _createProduct,
};
