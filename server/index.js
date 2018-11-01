import express from 'express';
import bodyParser from 'body-parser';
import users from './mocks/users';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT;

app.get('/heartbeat', (req, res) => res.send({
  dateTime: new Date().toJSON()
}));

app.get('/v1/users', (req, res) => {
  res.send(users);
});

app.get('/v1/users/:id', (req, res) => {
  res.send(users[0]);
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

app.delete('/v1/users/:id', (req, res) => {
  console.log('delete: id =>', req.params.id);
  res.status(200).end();
});

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

