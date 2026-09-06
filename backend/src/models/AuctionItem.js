import mongoose from "mongoose";

const auctionItemsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    start_price: {
        type: Number,
        required: true,
    },
    reserve_price: {
        type: Number,
        required: true,
    },
});

const AuctionItem = mongoose.model("AuctionItem", auctionItemsSchema);
export default AuctionItem;