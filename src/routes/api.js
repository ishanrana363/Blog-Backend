const express  = require('express');

const router = express.Router();
// blog controller

const blogController = require("../controllers/blogController");




router.post("/blog-post", blogController.postBlog);
router.post("/blog-all", blogController.allBlos );





module.exports = router;