import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDatabase from "../src/config/database.js";
import AuctionItem from "../src/models/AuctionItem.js";
import auctionItems from "./data.js";

dotenv.config();

const command = process.argv[2];

const run = async () => {
  try {
    await connectDatabase();

    if (command === "seed") {
      await AuctionItem.deleteMany({});
      await AuctionItem.insertMany(auctionItems);

      console.log(
        `Database seeded successfully. ${auctionItems.length} auction items added.`
      );
    } else if (command === "delete") {
      const result = await AuctionItem.deleteMany({});

      console.log(
        `Database cleared successfully. ${result.deletedCount} auction items deleted.`
      );
    } else {
      console.log(`Invalid command: ${command}`);
      console.log("Use: npm run seed");
      console.log("Or:  npm run seed:delete");
      process.exitCode = 1;
    }
  } catch (error) {
    console.error("Operation failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
};

run();