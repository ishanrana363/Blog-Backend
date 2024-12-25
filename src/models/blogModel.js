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
        name: String,
        image: String
    }
}, { timestamps: true, versionKey: false });


const blogModel = model('Blog', blogSchema);

module.exports = blogModel;

