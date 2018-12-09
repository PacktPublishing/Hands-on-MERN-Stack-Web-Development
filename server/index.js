import express from 'express';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import withAuthenticated from './middleware/withAuthentication';
import { UserModel } from './models/User';
import { ProductModel } from './models/Product';
import db from './db';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthenticated);
app.use(logger);

const port = process.env.PORT;

app.get('/heartbeat', (req, res) => res.send({
  dateTime: new Date().toJSON()
}));

app.get('/v1/users', async (req, res) => {
  const users = await UserModel.find() || [];
  res.send(users);
});

app.get('/v1/users/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(404).end();
  }
});

app.post('/v1/users', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const role = req.body.role;
  console.log('post: data =>', username, email, role);
  res.status(200).end();
});

app.put('/v1/users/:id', (req, res) => {
  const id = req.params.id;
  const username = req.body.username;
  const email = req.body.email;
  const role = req.body.role;
  console.log('put: data =>', id, username, email, role);
  res.status(200).end();
});

app.get('/v1/products', async (req, res) => {
  const products = await ProductModel.find() || [];
  res.send(products);
});

app.get('/v1/products/:id', async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).end();
    }
  } catch (e) {
    res.status(404).end();
  }
});

app.delete('/v1/users/:id', (req, res) => {
  console.log('delete: id =>', req.params.id);
  res.status(200).end();
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

