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
exports.adminService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const blogModel_1 = require("../Blog/blogModel");
const userModel_1 = require("../User/userModel");
const makeBlockUserInDB = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userModel_1.User.findByIdAndUpdate(userId, { isBlocked: true }, { new: true });
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'User not found');
    }
    return;
});
const deleteBlogById = (blogId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blogModel_1.Blog.findByIdAndDelete(blogId);
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Blog not found');
    }
    return;
});
exports.adminService = {
    makeBlockUserInDB,
    deleteBlogById,
};
