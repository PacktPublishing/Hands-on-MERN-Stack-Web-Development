import includeOnlyDefinedKeys from '../includeOnlyDefinedKeys';

test('includeOnlyDefinedKeys', () => {
  expect(includeOnlyDefinedKeys({
    id: 1,
    name: undefined,
    price: 999,
  })).toEqual({ id: 1, price: 999 });
});
