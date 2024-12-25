const express  = require('express');

const router = express.Router();
// blog controller

const blogController = require("../controllers/blogController");




router.post("/blog-post", blogController.postBlog);
router.get("/all-blogs", blogController.allBlogs);
router.get("/single-blogs/:id", blogController.singleBlog);
router.delete("/delete-blog/:id", blogController.deleteBlog);
router.put("/update-blog/:id", blogController.updateBlog);





module.exports = router;