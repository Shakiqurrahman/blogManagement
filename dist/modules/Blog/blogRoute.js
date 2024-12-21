"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const userConstant_1 = require("../User/userConstant");
const blogController_1 = require("./blogController");
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)(userConstant_1.USER_ROLE.user), blogController_1.blogControllers.createBlog);
router.patch('/:id', (0, auth_1.default)(userConstant_1.USER_ROLE.user), blogController_1.blogControllers.updateBlog);
router.delete('/:id', (0, auth_1.default)(userConstant_1.USER_ROLE.user), blogController_1.blogControllers.deleteBlog);
router.get('/', blogController_1.blogControllers.getAllBlogs);
exports.blogRoutes = router;
