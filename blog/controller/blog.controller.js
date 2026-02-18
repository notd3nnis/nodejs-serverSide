const Blog = require("./../models/blog.model");

const createBlog = async (req, res) => {
  try {
    const value = await req.body;
    await Blog.create(value);
    res.send({ success: true, message: "Blog created successfyly" });
  } catch (error) {
    console.log(error);
    res.send({ error: true, message: error.details });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (error) {
    res.end({ error: true, message: error.message });
  }
};

module.exports = {
  createBlog,
  getBlogs,
};
