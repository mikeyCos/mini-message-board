import express from "express";
import messagesController from "../controllers/messagesController.js";

const messagesRouter = express.Router();

messagesRouter.get("/", messagesController.getAllMessages);

export default messagesRouter;
