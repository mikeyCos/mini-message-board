import asyncHandler from "express-async-handler";
import { body, validationResult } from "express-validator";
import queries from "../db/queries.js";

const { insertMessage } = queries;

const validateMessage = [
  body("username")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage("Username must be between 2 and 20 characters long."),
  body("title")
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage("Title must be between 2 and 180 characters long."),
  body("body")
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage("Message must be between 2 and 300 characters long."),
];

const newController = {
  getRoot: asyncHandler((req, res) => {
    // I do not like this >:(
    res.render("new", {
      clickHandler: "resetForm()",
      title: "New",
    });
  }),
  postMessage: [
    validateMessage,
    asyncHandler(async (req, res) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).render("new", {
          clickHandler: "resetForm()",
          title: "New",
          errors: errors.array(),
        });
      }

      const { body, title, username } = req.body;
      const message = { title, body, username };
      console.log(message);
      // Insert into database
      await insertMessage(message);
      res.redirect("/messages");
    }),
  ],
};

export default newController;
