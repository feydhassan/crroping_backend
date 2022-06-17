import { Document } from 'mongodb';
import * as mongoose from 'mongoose';


interface address{
    city: String,
  street: String,
}
interface User extends Document {
    email: String,
  name: String,
  password: String,
  address: address ,
}
 
const addressSchema = new mongoose.Schema({
  city: String,
  street: String,
});
 
const userSchema = new mongoose.Schema({
  address: addressSchema,
  email: String,
  name: String,
  password: String,
});
 
const userModel = mongoose.model<User & mongoose.Document>('User', userSchema);
 
export default userModel;