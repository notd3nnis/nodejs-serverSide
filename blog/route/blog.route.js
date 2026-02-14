const express = require("express");
const { getBlog, createBlog } = require("../controller/blog.controller");

const route = express.Router();

route.get("/", getBlog);
route.post("/", createBlog);

module.exports = route;
