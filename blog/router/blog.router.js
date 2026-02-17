const express = require("express");
const { getBlogs, createBlog } = require("../controller/blog.controller");

const router = express.Router();

router.get("/blogs", getBlogs);
router.post("blog", createBlog);

module.exports = router;
