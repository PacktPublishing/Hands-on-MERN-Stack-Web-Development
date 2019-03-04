import { UserModel } from '../models/User';

export default (app) => {
  app.get('/v1/users', async (req, res) => {
    if (!req.isAdmin) {
      return res.status(403).end();
    }
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
    if (!req.isAdmin) {
      return res.status(403).end();
    }
    // TODO: Implement
    res.status(200).end();
  });

  app.post('/v1/users/register', (req, res) => {
    // TODO: Implement
    res.status(200).end();
  });

  app.put('/v1/users/:id', (req, res) => {
    if (!req.isAdmin) {
      return res.status(403).end();
    }
    // TODO: Implement
    res.status(200).end();
  });

  app.delete('/v1/users/:id', (req, res) => {
    if (!req.isAdmin) {
      return res.status(403).end();
    }
    // TODO: Implement
    res.status(200).end();
  });
}
