## **Express-Mongodb-Advanced**

## **Objective**
- Review basic CRUD operations using Mongoose.
- Perform more complex queries and updates.
- Learn to handle validation and errors more effectively.

## **Instructions**
## Part 1: Set Up the Project
- Initialize the Project and Install Dependencies:

- [x] mkdir express-mongodb-advanced
- [x] cd express-mongodb-advanced
- [x] npm init -y
- [x] npm install express mongoose dotenv
## **Create the Server:**
- Create a file named index.js and set up a basic Express server with Mongoose connection. Put the connection string into the .env file. You may use the same connection string as before.
## **Part 2: Define the Schema and Model**
- [x] Create models/songs.js:
- [x] Define a user schema with the following fields: title, artist, genre.

## **Part 3: Create and Read Users**
- [x] Update index.js to include routes for creating and reading users:
- [x] Route to add a new user (POST /songs).

## **Part 4: Test Create and Read Operations**
- Start Your Server:
- npm run dev
- Test with Thunder Client or Postman:

![Alt text](imgs/hello-world.jpg)

## **web.postman.co** 

![Alt text](imgs/post.jpg)

## **Get**

![Alt text](imgs/get.jpg)

## **cloud.mongodb.com** 

![Alt text](imgs/mongo-com.jpg)

![Alt text](imgs/users.jpg)

## **Part 5: Update and Delete Users**

- [x] Update index.js to include update and delete routes:
- [x] Route to update a user (PUT /users/:id).

![Alt text](imgs/put.jpg)

- [x] Route to deactivate a user (PUT /users/:id/deactivate).

![Alt text](imgs/deactivate.jpg)

- [x] Route to delete a user (DELETE /users/:id).

![Alt text](imgs/delete.jpg)

## **Bonus:** 
- deploy to render.com. You will need to set up the environment on render.com and set up the whitelist on mongodb.com

![Alt text](imgs/render-hello.jpg)

![Alt text](imgs/render-live.jpg)


