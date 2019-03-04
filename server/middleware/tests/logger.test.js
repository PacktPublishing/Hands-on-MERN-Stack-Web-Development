import logger from '../logger';

test('It calls next()', () => {
  const next = jest.fn(x => x);
  logger({}, {}, next);
  expect(next.mock.calls.length).toBe(1);
});
