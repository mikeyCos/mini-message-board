import asyncHandler from "express-async-handler";

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const messagesController = {
  getAllMessages: asyncHandler((req, res) => {
    console.log("messageController...");
    res.render("messages", {
      messages,
      title: "Messages",
      clickHandler: "messageDetails",
    });
  }),
};

export { messagesController as default, messages };
