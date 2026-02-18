const express = require("express");
const router = express.Router();
const validate = require("../middleware/joi.validate");

const { createBlog, getBlogs } = require("./../controller/blog.controller");
const { createBlogSchema } = require("../validations/blog.validation");

router.get("/blogs", getBlogs);
router.post("/blog", validate(createBlogSchema), createBlog);

module.exports = router;
