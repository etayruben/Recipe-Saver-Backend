import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 5500;

app.use(express.json());

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.get('/addRecipe', (req: Request, res: Response) => {
  res.send('Recipe Added');
});

app.get('/getRecipe', (req: Request, res: Response) => {
  res.send({
    headLine: 'Recipe headline!',
    link: 'https://sallysbakingaddiction.com/easy-homemade-soft-pretzels/',
    imageRaw:
      'https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg',
    categories: ['Sweat', 'Sour'],
    workTime: 25,
  });
});

app.get('/loadRecipes', (req: Request, res: Response) => {
  res.send([
    {
      headLine: 'Recipe headline!',
      link: 'https://sallysbakingaddiction.com/easy-homemade-soft-pretzels/',
      imageRaw:
        'https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg',
      categories: ['Sweat', 'Sour'],
      workTime: 25,
    },
    {
      headLine: 'Recipe headline!',
      link: 'https://sallysbakingaddiction.com/easy-homemade-soft-pretzels/',
      imageRaw:
        'https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg',
      categories: ['Sweat', 'Sour'],
      workTime: 25,
    },
    {
      headLine: 'Recipe headline!',
      link: 'https://sallysbakingaddiction.com/easy-homemade-soft-pretzels/',
      imageRaw:
        'https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg',
      categories: ['Sweat', 'Sour'],
      workTime: 25,
    },
  ]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
