import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './middleware/logger';
import withAuthenticated from './middleware/withAuthentication';
import getUserRoutes from './routes/users';
import getProductRoutes from './routes/products';
import db from './db';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthenticated);
app.use(logger);
getUserRoutes(app);
getProductRoutes(app);

app.get('/heartbeat', (req, res) => res.send({
  dateTime: new Date().toJSON()
}));

const port = process.env.PORT;
app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

