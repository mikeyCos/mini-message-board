import asyncHandler from "express-async-handler";
import { messages } from "./messagesController.js";

const newController = {
  getRoot: asyncHandler((req, res) => {
    console.log("newController");
    console.log(`req.url: ${req.url}`);
    res.render("new");
  }),
  postMessage: asyncHandler((req, res) => {
    console.log("req.body:", req.body);
    const { message, user } = req.body;
    messages.push({ text: message, user, added: new Date() });
  }),
};

export default newController;
