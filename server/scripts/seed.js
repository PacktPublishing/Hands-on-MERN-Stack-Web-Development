import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  email: String,
  username: String,
  role: String,
});
const UserModel = mongoose.model('User', UserSchema);

mongoose.connect('mongodb://localhost:27017');
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Database connection is open!');
  const user = new UserModel({
    email: 'jondoe@gmail.com',
    username: 'jondoe1234',
    role: 'customer',
  });
  user.save((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('User saved!');
    }
  });
});
