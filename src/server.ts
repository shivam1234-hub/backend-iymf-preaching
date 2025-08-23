import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import centerRoutes from './routes/center';
import batchRoutes from './routes/batch';
import serviceRoutes from './routes/service';
import userRoutes from './routes/user';
import sessionRoutes from './routes/session';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// routes
app.use('/center', centerRoutes);
app.use('/batch', batchRoutes);
app.use('/service', serviceRoutes);
app.use('/user', userRoutes);
app.use('/session', sessionRoutes);

// Mongo connection
mongoose.connect(process.env.MONGO_URI as string)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Port: use Render’s injected PORT or fallback
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
