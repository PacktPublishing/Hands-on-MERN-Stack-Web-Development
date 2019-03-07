import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard from '../ProductCard';

test('To match snapshot', () => {
  const output = renderer.create(
    <ProductCard
      name="Product XYZ"
      price="$49.99"
      images={['https://example.com/some.png']}
    />
  );
  expect(output.toJSON()).toMatchSnapshot();
});

test('To match snapshot when there is a remove button', () => {
  const output = renderer.create(
    <ProductCard
      name="Product XYZ"
      price="$49.99"
      images={['https://example.com/some.png']}
      withRemoveButton={true}
      onRemove={() => {}}
    />
  );
  expect(output.toJSON()).toMatchSnapshot();
});
