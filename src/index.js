const express = require("express");
const morgan = require("morgan");
const app = express();
var api = require("./routes/api.routes.js");
//set port
app.set("port", process.env.PORT || 3000);
//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//init server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});

//api routes
app.use("/api", api);
