import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});