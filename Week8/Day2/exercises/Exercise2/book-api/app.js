const express = require("express");
const routes = require('./routes/books.routes.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

  app.listen(5001, () => {
    console.log(`Server 5001 is running`);
  });
