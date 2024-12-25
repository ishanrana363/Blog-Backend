const blogModel = require("../models/blogModel");
const { successResponse, errorResponse } = require("../utility/response");


const postBlog = async (req, res) => {
    try {
        const newBlog = new blogModel({
            ...req.body
        })

        const blog = await newBlog.save();
        res.status(200).send({ message: "Post created successfully", blog })
    } catch (error) {
        console.error(error);
        return errorResponse(res, 500, "Something went wrong", error);
    }
};


const allBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find({}).sort({ createdAt:-1});
        res.status(200).send({ message: "All blogs", blogs })
    } catch (error) {
        console.error(error);
        return errorResponse(res, 500, "Something went wrong", error);
    }
};

const singleBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = {
            _id: id
        };
        const blog = await blogModel.findOne(filter);
        if (!blog) {
            return errorResponse(res, 404, "Blog not found");
        }
        return successResponse(res,200,"Blog find id successfully",blog);
    } catch (error) {
        return errorResponse(res, 500, "Something went wrong", error);
    }
};

module.exports = { postBlog,allBlogs,singleBlog };