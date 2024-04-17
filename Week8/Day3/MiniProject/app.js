import express from "express";
import routes from './routes/task.routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

  app.listen(5000, () => {
    console.log(`Server 5000 is running`);
  });
