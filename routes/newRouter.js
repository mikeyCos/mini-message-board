import express from "express";
import newController from "../controllers/newController.js";

const newRouter = express.Router();

newRouter.get("/", newController.getRoot);

newRouter.post("/", newController.postMessage);

export default newRouter;
