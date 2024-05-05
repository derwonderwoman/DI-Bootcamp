const express = require("express");
const routes = require('./routes/hackroutes.js');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);
app.listen(5000, () => {
  console.log(`Server 5000 is running`)
});