import express, { Application } from 'express';
import { RouteBuilder } from './web/routes';

const app: Application = express();
RouteBuilder.build(app);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});
