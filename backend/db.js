import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@spicymango.rvfne4x.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri, { dbName: 'SpicyMango' }); // mainDB -> This is the name of the DB
    console.log('Connected to DB');
    return { success: true };
  } catch (error) {
    console.log('Error connecting to DB: ', error.message);
    return { success: false, error: error };
  }

  //implement logic to fecth data and insert into DB


};

export default connectDB;