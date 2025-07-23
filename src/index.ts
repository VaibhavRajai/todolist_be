import express from 'express';
import connectDB from './config/db';
import authRoutes from './routes/auth';
const app = express();
const PORT = 3000;

app.use(express.json()); 
connectDB();

app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
