import express from 'express';
import connectDB from './config/db';
import authRoutes from './routes/auth';
import cors from 'cors'
const app = express();
app.use(cors())
const PORT = 3000;

app.use(express.json()); 
connectDB();

app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
