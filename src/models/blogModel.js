const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const blogSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    author: {
        authorName: String,
        authorImage: String
    }
}, { timestamps: true, versionKey: false });


const blogModel = model('Blog', blogSchema);

module.exports = blogModel;

