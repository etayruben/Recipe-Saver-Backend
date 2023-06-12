import express, { Request, Response } from 'express';
import cors from 'cors';
import {insertRecipe, queryRecipes, removeRecipe } from "./db/api"

const app = express();
const port = 5500;

app.use(express.json());
app.use(express.text());
  
app.use(cors());

app.get('/health_check', (req: Request, res: Response) => {
  res.send('Server is up and running');
});

app.post("/addMultipleRecipes", (req: Request, res: Response) => {
  res.send("Not implemented yet")
})

app.post('/addRecipe', async (req: Request, res: Response) => {
  await insertRecipe(req.body)
  res.send("Recipe Added!")
});

app.post('/removeRecipe', async (req: Request, res: Response) => {
  const result = await removeRecipe(req.body)
  if (result.acknowledged){
    res.send("Recipe Removed!")
  } else {
    res.send("There was a problem in the server")
  }
});

app.post('/loadRecipes', async (req: Request, res: Response) => {
  const recipes = await queryRecipes(req.body["query"], req.body["options"]);
  res.json(recipes)
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
