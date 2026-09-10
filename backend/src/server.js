import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import auctionRoutes from "./routes/auctionroutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", auctionRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Auction API is running"
  });
});

const startServer = async () => {
  await connectDatabase();

  

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();