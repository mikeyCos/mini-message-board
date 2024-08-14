import express from "express";
import messagesController from "../controllers/messagesController.js";

const messagesRouter = express.Router();

messagesRouter.get("/", messagesController.getAllMessages);

messagesRouter.get(
  "/message/:user/:title/:body/:timestamp",
  messagesController.getMessage
);

export default messagesRouter;
