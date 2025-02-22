"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const blogModel = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    thumbnail: {
        type: String,
    },
}, { timestamps: true });
exports.Blog = (0, mongoose_1.model)('Blog', blogModel);
