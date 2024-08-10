import express from "express";
import dotenv from "dotenv";
import path from "path";

import homeRouter from "./routes/homeRouter.js";
import newRouter from "./routes/newRouter.js";
import messagesRouter from "./routes/messagesRouter.js";

dotenv.config();

const { dirname } = import.meta;
const port = process.env.PORT || 3000;
const app = express();
const utilsPath = path.join(dirname, "utils");
const stylesPath = path.join(dirname, "public/styles");
const iconsPath = path.join(dirname, "public/assets/icons");
const SVGInjectPath = path.join(
  dirname,
  "node_modules/@iconfu/svg-inject/dist"
);

console.log(SVGInjectPath);

app.use([
  express.static(utilsPath),
  express.static(stylesPath),
  express.static(iconsPath),
  express.static(SVGInjectPath),
]);

app.set("views", [
  path.join(dirname, "views/pages"),
  path.join(dirname, "views/partials"),
]);

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
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
