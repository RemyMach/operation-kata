import express, { Application } from 'express';
import { RouteBuilder } from './web/routes';

const app: Application = express();
RouteBuilder.build(app);

const port = process.env.PORT || 3000; 

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
