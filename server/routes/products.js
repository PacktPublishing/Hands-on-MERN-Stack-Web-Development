import { ProductModel } from '../models/Product';

export default (app) => {
  app.get('/v1/products', async (req, res) => {
    const { categories } = req.query;
    const categoryList = categories ? categories.split(',') : [];
    const products = await ProductModel.find(
      categoryList.length > 0 ?
        { categories: { $in: categoryList } } :
        undefined
    ) || [];
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

  app.post('/v1/products', async (req, res) => {
    if (!req.isAdmin) {
      return res.status(403).end();
    }
    const product = await ProductModel.create(req.body);
    if (product) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });

  app.put('/v1/products/:id', (req, res) => {
    if (!req.isAdmin) {
      return res.status(403).end();
    }
    ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err) => {
        if (err) {
          res.status(500).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });

  app.delete('/v1/products/:id', (req, res) => {
    if (!req.isAdmin) {
      return res.status(403).end();
    }
    ProductModel.findByIdAndDelete(
      req.params.id,
      (err) => {
        if (err) {
          res.status(500).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });
}
