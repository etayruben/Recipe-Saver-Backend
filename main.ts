import express, { Request, Response } from 'express';
import cors from 'cors';
import {insertRecipe, queryRecipes} from "./db/api"

const app = express();
const port = 5500;

app.use(express.json());
  
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!');
});

app.post("/addMultipleRecipes", (req: Request, res: Response) => {
  res.send("Not implemented yet")
})

app.post('/addRecipe', (req: Request, res: Response) => {
  console.info(req);
  insertRecipe(req.body)
  res.send("Recipe Added!")
});

app.get('/getRecipe', (req: Request, res: Response) => {

  res.send({
    headline: 'Recipe headline!',
    link: 'https://sallysbakingaddiction.com/easy-homemade-soft-pretzels/',
    imageRaw:
      'https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg',
    categories: ['Sweat', 'Sour'],
    workTime: 25,
  });
});

app.get('/loadRecipes', (req: Request, res: Response) => {
  res.send(queryRecipes({}, {}))
  return 
  res.send([
    {
      headline: 'Recipe headline!',
      link: 'https://sallysbakingaddiction.com/easy-homemade-soft-pretzels/',
      imageRaw:
        'https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg',
      categories: ['Sweat', 'Sour'],
      workTime: 25,
    },
    {
      headline: 'Recipe headline!',
      link: 'https://sallysbakingaddiction.com/easy-homemade-soft-pretzels/',
      imageRaw:
        'https://sallysbakingaddiction.com/wp-content/uploads/2017/04/easy-homemade-soft-pretzels.jpg',
      categories: ['Sweat', 'Sour'],
      workTime: 25,
    },
    {
      headline: 'Recipe headline!',
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
