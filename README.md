# Auction Backend API

A backend application for managing and searching auction items, built with Node.js, Express and MongoDB.

The project includes a REST API for searching auction items and a command-line utility for adding and removing sample data from a local MongoDB database.

## Features

- Search auction items by keyword
- Search across item titles and descriptions
- Case-insensitive search
- Store auction data in MongoDB
- Seed sample auction data from the command line
- Delete seeded data from the database
- REST API built with Express

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- REST API

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB Community Server
- MongoDB Compass

### Clone the repository

```bash
git clone https://github.com/munishk686/auction-backend-api.git
cd auction-backend-api
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file in the project root:

```env
MONGO_URI=mongodb://localhost:27017/auction_db
PORT=3000
```

### Start the API

```bash
npm run start
```

The API will run locally on:

```text
http://localhost:3000
```

## Seed the Database

Add the sample auction items:

```bash
npm run seed
```

Delete the auction items:

```bash
npm run seed:delete
```

## Search Auction Items

The API provides a keyword search endpoint:

```text
GET /api/auctions?search=bike
```

For example:

```text
http://localhost:3000/api/auctions?search=bike
```

The search is case-insensitive and checks both the auction item's title and description.

## Project Structure

```text
src/
├── config/
├── controllers/
├── models/
├── routes/
└── server.js

seed/
├── data.js
└── seed.js
```

## What I Worked On

This project demonstrates my backend development experience with:

- Building REST API endpoints using Express
- Creating MongoDB data models with Mongoose
- Connecting a Node.js application to MongoDB
- Creating a command-line data seeding utility
- Managing environment variables with dotenv
- Implementing keyword-based database searches
- Organising backend code using controllers, routes and models

## Project Context

This project was developed as part of the Mission Ready Advanced Full Stack Developer programme.

## Author

Munish Kumar