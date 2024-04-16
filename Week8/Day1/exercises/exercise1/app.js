import express from "express";
import routes from './routes/index.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

  app.listen(3000, () => {
    console.log(`Server 3000 is running`);
  });