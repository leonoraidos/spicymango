import express from 'express';
import cors from 'cors';
import connectDB from './db.js';
import router from './router/routes.js';
import axios from 'axios';

const app = express();

const corsConfig = {

  origin: 'http://localhost:5173',
  credentials: true,

};

app.use(cors(corsConfig));
app.use(express.json());

app.use(router);

await connectDB();

const populateDatabase = async () => {
  try {
    // Make the request to populate the database
    await axios.get('http://localhost:3000/populate');

    // Log that the database has been populated
    console.log('Database populated successfully');
  } catch (error) {
    console.error(error);
  }
};

// Call the populateDatabase function on app startup
populateDatabase();


app.listen(3000, () => console.log('Listening on port 3000'));