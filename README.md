# Recipe-Saver Backend Project

Welcome to the Recipe-Saver backend project! This readme file will guide you through the necessary steps to set up and start the backend server for Recipe-Saver.

This project is done for my self-development and my friend's comfort

## Project Overview
Recipe-Saver is a backend application that provides a RESTful API for managing recipes. It allows users to create and remove recipes. The backend is built using TypeScript and the Express framework.

## Prerequisites
Before you begin, ensure that you have the following prerequisites installed on your system:
- TypeScript (latest version)
- Node.js (latest version)
- Express (latest version)
- MongoDB (latest version)
- [Insert any other dependencies]

## Installation
To install the Recipe-Saver backend project, follow these steps:
1. Clone the repository: `$ git clone https://github.com/etayruben/recipe-saver-backend.git`
2. Change to the project directory: `$ cd recipe-saver-backend`
3. Install dependencies: `$ npm install` or `$ yarn install`

## Configuration
Before running the server, you need to configure the application. Follow these steps to set up the necessary configuration:
1. Rename the `.env.example` file to `.env`.
2. Open the `.env` file and update the configuration variables according to your environment.
3. Set the value of the `MONGODB_URI` variable to your MongoDB connection URI.

## Running the Server
To start the backend server for Recipe-Saver, follow these steps:
1. Ensure that your MongoDB instance is running.
2. Run the server: `$ npm start` or `$ yarn start`.
3. The server should start running on the specified port (default is `3000`).
4. You should see a message indicating that the server has started successfully.

## API Documentation
The Recipe-Saver backend provides a RESTful API for interacting with the application. Currently, the API supports the following endpoints:

- `/addRecipe`: Use this endpoint to insert a new recipe into the system. You need to provide the necessary details of the recipe in the request body. The structure of a recipe document is as follows:

```json
{
  "headline": "string (required)",
  "link": "string (required)",
  "imageRaw": "string",
  "categories": ["string"],
  "workTime": "number"
}
```

The `headline` and `link` fields are required.

- `/removeRecipe`: Use this endpoint to remove a recipe from the system. You need to provide the identifier of the recipe to be released in the request body.

Please refer to the API documentation for detailed information on using these endpoints and the required request formats.

That's it! You should now have the Recipe-Saver backend project set up and ready to use. If you have any questions or run into any issues, please refer to the project documentation or feel free to reach out to the project maintainers. Happy coding!
