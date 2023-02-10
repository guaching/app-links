import express, { Router } from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";

import RouterIndex from "./routes/index.routes";
import RouterAuthentication from "./routes/authentication.js";
import RouterLinks from "./routes/links.js";

//initializations
const app = express();

//settings
app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  engine({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./lib/handlebars"),
  })
);
app.set("view engine", "hbs");

//Midlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Gloval variables
app.use((req, res, next) => {
  next();
});

//Routes

app.use(RouterIndex);
app.use(RouterAuthentication);
app.use(RouterLinks);

//Public
app.use(express.static(path.join(__dirname, "public")));




app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
