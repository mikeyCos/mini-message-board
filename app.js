import express from "express";
import dotenv from "dotenv";

import { staticPaths, viewsPaths } from "./paths/paths.js";
import homeRouter from "./routes/homeRouter.js";
import newRouter from "./routes/newRouter.js";
import messagesRouter from "./routes/messagesRouter.js";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(staticPaths.map((path) => express.static(path)));

app.set("views", viewsPaths);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);
app.use("/new", newRouter);
app.use("/messages", messagesRouter);
// app.use("/message", messageRouter);

app.use((req, res) => {
  res.render("404", { title: "404 - Page Not Found" });
});

// Error middleware function
app.use((err, req, res, next) => {
  res.status(500).render("404", { title: "404 - Page Not Found" });
});

app.listen(port, () => console.log(`App running on port ${port}`));
