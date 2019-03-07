import ProductModel from '../Product';

test('It accepts all params and implements all methods', () => {
  const raw = {
    _id: '1234',
    name: 'foo',
    price: 123,
    images: ['1'],
    featured: true,
  };
  const product = new ProductModel(raw);
  expect(product.getId()).toBe(raw._id);
  expect(product.getName()).toBe(raw.name);
  expect(product.getPrice()).toBe(raw.price);
  expect(product.getImages()).toBe(raw.images);
  expect(product.isFeatured()).toBe(raw.featured);
  expect(product.getData()).toEqual(
    Object.assign(
      {},
      raw,
      { formattedPrice: '$1.23' }
    )
  );
});
