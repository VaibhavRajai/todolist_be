import express from 'express';
import connectDB from './config/db';
import authRoutes from './routes/auth';
import taskRoutes from  './routes/taskRoutes';
import cors from 'cors'
const app = express();
app.use(cors({  origin: '*', // or '*' for all, not recommended for production
  credentials: true}))
const PORT = 3000;

app.use(express.json()); 
connectDB();

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
