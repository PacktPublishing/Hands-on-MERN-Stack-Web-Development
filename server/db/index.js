import mongoose from 'mongoose';
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

db.on('error', (error) => {
  console.error(error);
});

db.once('open', () => {
  console.log('Database connection is open!');
});

export default db;
