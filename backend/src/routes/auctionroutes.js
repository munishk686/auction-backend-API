import express from "express";
import { searchAuctionItems } from "../controllers/auctionController.js";

const router = express.Router();

router.get("/auctions", searchAuctionItems);

export default router;  