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


module.exports = { postBlog };