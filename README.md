# Level 5 ADV Mission 5 Phase 1 Readme

Introduction

This project is an auction application backend built using Node.js, Express, and MongoDB.

The project includes a command-line tool for adding sample auction items to the local MongoDB database and deleting the data when required.

It also includes an API that allows users to search auction items by keyword. The search checks both the item title and description.

## Installation

Clone the repository and install the required dependencies:

npm install

Create a .env file in the backend folder and add your local MongoDB connection:

MONGO_URI=mongodb://localhost:27017/auction_db

PORT=3000

Start the API

Start the Express server with:

```bash
npm run start
```

The API will run on:

http://localhost:3000

Seed the Database

To add the sample auction items to MongoDB:

```bash
npm run seed
```

To delete the auction items from the database:

```bash
npm run seed:delete
```

Search Auction Items

The API provides a keyword search endpoint:

GET /api/auctions?search=bike

For example:

http://localhost:3000/api/auctions?search=bike

The search is case-insensitive and checks both the title and description fields.

## More Details

Technologies Used:

Node.js
Express
MongoDB
Mongoose
dotenv



Author:
Munish Kumar
