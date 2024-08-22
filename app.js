import express from "express";
import { staticPaths, viewsPaths } from "./paths/paths.js";
import homeRouter from "./routes/homeRouter.js";
import newRouter from "./routes/newRouter.js";
import messagesRouter from "./routes/messagesRouter.js";
import env from "./utils/environment.js";

const { port } = env;
const app = express();

// Specifying static paths
app.use(staticPaths.map((path) => express.static(path)));

// Setting views
app.set("views", viewsPaths);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// Specifying routes
app.use("/", homeRouter);
app.use("/new", newRouter);
app.use("/messages", messagesRouter);

app.use((req, res) => {
  res.render("404", { title: "404 - Page Not Found" });
});

// Error middleware function
app.use((err, req, res, next) => {
  res.status(500).render("404", { title: "404 - Page Not Found" });
});

app.listen(port, () => console.log(`App running on port ${port}`));
