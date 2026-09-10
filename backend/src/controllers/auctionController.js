import AuctionItem from "../models/AuctionItem.js";

export const searchAuctionItems = async (req, res) => {
  try {
    const search = req.query.search;

    if (!search) {
      return res.status(400).json({
        message: "Please provide a search term"
      });
    }

    const items = await AuctionItem.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }
      ]
    });

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: "Failed to search auction items",
      error: error.message
    });
  }
};