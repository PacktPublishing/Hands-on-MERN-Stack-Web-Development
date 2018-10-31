import express from 'express';

const app = express();
const port = process.env.PORT;

app.get('/ping', (req, res) => res.send('pong'));

app.get('/heartbeat', (req, res) => res.send({
  dateTime: new Date().toJSON()
}));

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);

