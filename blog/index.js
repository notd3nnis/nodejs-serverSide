const express = require("express");
const mongoose = require("mongoose");
const app = express();
const blogRoute = require("./route/blog.route");

mongoose
  .connect("mongodb://localhost:27017/server")
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(blogRoute);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
