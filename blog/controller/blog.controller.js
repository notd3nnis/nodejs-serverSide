const Blog = require("../model/blog.model");

const getBlogs = () => async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.send({ blogs });
  } catch (error) {
    res.end({ error: true, message: "error occured" });
  }
};

const createBlog = () => async (req, res) => {
  try {
    await Blog.create(req.body);
    res.send({ success: true, message: "blog created" });
  } catch (error) {
    res.end({ error: true, message: "error occured" });
  }
};

module.exports = { getBlogs, createBlog };
