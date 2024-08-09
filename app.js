import express from "express";
import dotenv from "dotenv";
import path from "path";

import indexRouter from "./routes/indexRouter.js";
import newRouter from "./routes/newRouter.js";
import messagesRouter from "./routes/messagesRouter.js";

dotenv.config();

const { dirname } = import.meta;
const port = process.env.PORT || 3000;
const app = express();

app.set("views", [
  path.join(dirname, "views/pages"),
  path.join(dirname, "views/partials"),
]);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/messages", messagesRouter);

app.use((req, res) => {
  console.log(`req.url: ${req.url}`);
  res.render("404");
});

app.use((err, req, res, next) => {
  console.log(`req.url: ${req.url}`);
  console.log("last use() called");
  // res.status(500).render("404");
});

app.listen(port, () => console.log(`App running on port ${port}`));
