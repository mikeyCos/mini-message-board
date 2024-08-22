import asyncHandler from "express-async-handler";
import queries from "../db/queries.js";

const { getAllMessages, getMessage } = queries;
let count = 0;

const messagesController = {
  getAllMessages: asyncHandler(async (req, res) => {
    // Get all rows from messages table
    const messages = await getAllMessages();
    res.render("messages", {
      title: "Messages",
      messages,
    });
  }),
  getMessage: asyncHandler(async (req, res) => {
    // Get message row based on req.params
    const { messageid } = req.params;
    const message = await getMessage(messageid);

    res.render("messageDetails", {
      title: "Message Details",
      message,
    });
  }),
};

export { messagesController as default };
