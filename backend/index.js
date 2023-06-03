import express from 'express';
import cors from 'cors';
import connectDB from './db.js';

const app = express();

app.use(cors());

await connectDB();
app.listen(3000, () => console.log('Listening on port 3000'));