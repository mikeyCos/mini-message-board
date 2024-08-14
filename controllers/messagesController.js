import asyncHandler from "express-async-handler";

const messages = [
  {
    title: "Hi there!",
    body: "Integer molestie nisi ac purus finibus, non dapibus lectus fringilla. Aliquam hendrerit consequat commodo. Cras varius interdum nisl eget mattis.",
    user: "Amando",
    timestamp: new Date(),
  },
  {
    title: "Hello World!",
    body: "Sed eget tempus elit, quis ultricies justo. Aenean pharetra tempor turpis, a egestas nisl pharetra et.",
    user: "Charles",
    timestamp: new Date(),
  },
];

const messagesController = {
  getAllMessages: asyncHandler((req, res) => {
    console.log("messageController...");
    res.render("messages", {
      title: "Messages",
      messages,
      clickHandler: "messageDetails",
    });
  }),
  getMessage: asyncHandler((req, res) => {
    console.log("messageController.getMessage");
    console.log("req.params:", req.params);
    console.log("req.url:", req.url);
    res.render("messageDetails", {
      title: "Message Details",
      message: { ...req.params },
    });
  }),
};

export { messagesController as default, messages };
