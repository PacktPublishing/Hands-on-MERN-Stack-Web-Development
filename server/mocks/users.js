import UserModal from '../models/User';
const user1 = new UserModal({
  id: '44jweqmw03f',
  username: 'jondoe',
  email: 'jondoe@gmail.com',
  role: 'admin',
});

const user2 = new UserModal({
  id: 'gdfgh43tws2e',
  username: 'janedoe',
  email: 'janedoe@gmail.com',
  role: 'customer',
});

const users = [user1.getData(), user2.getData()];

export default users;