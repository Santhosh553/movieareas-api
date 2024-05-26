import express from 'express';
import movieRoute from './routes/movies.routes.js';
import connectDB from './lib/db.js';

const app = express();
const PORT = 3000;

// DB Connection
connectDB();

// Data Understanding Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!!' });
});

// Middleware
app.use('/api', movieRoute);


app.listen(PORT, () => {
  console.log('Server is running on ', PORT);
});