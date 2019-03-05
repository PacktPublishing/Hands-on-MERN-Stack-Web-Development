import UserModel from '../User';

test('It accepts all params and implements all methods', () => {
  const raw = { _id: '1234', username: 'jon', email: 'jon@company.co', role: 'admin' };
  const user = new UserModel(raw);
  expect(user.getId()).toBe(raw._id);
  expect(user.getUsername()).toBe(raw.username);
  expect(user.getEmail()).toBe(raw.email);
  expect(user.getRole()).toBe(raw.role);
  expect(user.getData()).toEqual(raw);
});
