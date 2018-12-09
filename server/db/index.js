import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017');
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Database connection is open!');
});

export default db;
