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
    res.render("messages", { messages });
  }),
};

export { messagesController as default, messages };
