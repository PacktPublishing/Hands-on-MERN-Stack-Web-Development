import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema({
  email: String,
  username: String,
  role: String,
});

export const UserModel = mongoose.model('User', UserSchema);
