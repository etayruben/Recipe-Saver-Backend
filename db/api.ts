import dotenv from 'dotenv';
dotenv.config();
import { MongoClient, ServerApiVersion } from 'mongodb';

let uri = process.env.MONGODB_URI;
if (uri === undefined) {
  uri = "";
}

interface Recipe {
  headline: string;
  link: string;
  imageRaw: string;
  categories: string[];
  workTime: number;
  _id: string;
}


// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getCollection(db_name: string, collection: string) {
  await client.connect();
  console.log("You successfully connected to MongoDB!");
  const database = client.db(db_name);
  return database.collection<Recipe>(collection);
}


async function insertRecipe(recipe: Recipe) {
    const recipesCollection = await getCollection("Recipe-Saver", "Recipes")
    const result = await recipesCollection.insertOne(recipe);

    if (result.acknowledged) {
      console.log("Inserted Correctly!");
      return result
    } else {
      console.error("A problem occurred when inserting");
      return result
    }

  }
async function removeRecipe(_id: string) {
  const recipesCollection = await getCollection("Recipe-Saver", "Recipes")

  const recipe = { _id: _id };

  const result = await recipesCollection.deleteOne(recipe);
  return result
}


async function queryRecipes(query: Object, options: Object) {
    const recipesCollection = await getCollection("Recipe-Saver", "Recipes")
    const result = await recipesCollection.find(query, options).toArray();

    console.log('Found recipes:', result);
    return result
  }


export {insertRecipe, queryRecipes, removeRecipe};
