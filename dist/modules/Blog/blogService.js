"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blogModel_1 = require("./blogModel");
const createBlogInToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newBlog = (yield blogModel_1.Blog.create(payload)).populate({
        path: 'author',
    });
    return newBlog;
});
const updateBlogInToDB = (id, userId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blogModel_1.Blog.findById(id).populate('author').lean();
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Blog is not found');
    }
    // Check if the user is authorized
    if (blog.author._id.toString() !== userId) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Unauthorized to update blog');
    }
    const updatedBlog = yield blogModel_1.Blog.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return updatedBlog;
});
const deleteBlogFromDB = (id, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield blogModel_1.Blog.findById(id).populate('author').lean();
    if (!blog) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Blog is not found');
    }
    // Check if the user is authorized
    if (blog.author._id.toString() !== userId) {
        throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Unauthorized to delete blog');
    }
    yield blogModel_1.Blog.findByIdAndDelete(id);
    return;
});
const getAllBlogsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const blogs = yield blogModel_1.Blog.find({ isPublished: true }).populate('author');
    return blogs;
});
exports.blogServices = {
    createBlogInToDB,
    updateBlogInToDB,
    deleteBlogFromDB,
    getAllBlogsFromDB,
};
