import asyncHandler from "express-async-handler";
import { messages } from "./messagesController.js";

const newController = {
  getRoot: asyncHandler((req, res) => {
    console.log("newController");
    console.log(`req.url: ${req.url}`);
    // I do not like this >:(
    res.render("new", {
      clickHandler: "resetForm()",
      title: "New",
    });

    // res.render("new", {
    //   clickHandler: `(function resetForm() {
    //     console.log(this);
    //   })()`,
    // });
  }),
  postMessage: asyncHandler((req, res) => {
    const { message, user } = req.body;
    messages.push({ text: message, user, added: new Date() });
    res.redirect("/messages");
  }),
};

export default newController;
