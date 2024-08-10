import express from "express";
import homeController from "../controllers/homeController.js";

const homeRouter = express.Router();

homeRouter.get("/", homeController.getRoot);

export default homeRouter;
