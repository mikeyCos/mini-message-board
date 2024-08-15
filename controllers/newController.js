import asyncHandler from "express-async-handler";
import { messages } from "./messagesController.js";

const newController = {
  getRoot: asyncHandler((req, res) => {
    // I do not like this >:(
    res.render("new", {
      clickHandler: "resetForm()",
      title: "New",
    });
  }),
  postMessage: asyncHandler((req, res) => {
    const { title, body, user } = req.body;
    messages.push({ title, body, user, timestamp: new Date() });
    res.redirect("/messages");
  }),
};

export default newController;
