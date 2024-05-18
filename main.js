import express from 'express';
import movieRoute from './routes/movies.routes.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!!' });
});


app.use('/api', movieRoute);


app.listen(PORT, () => {
  console.log('Server is running on ', PORT);
});