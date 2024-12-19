"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const userConstant_1 = require("../User/userConstant");
const adminController_1 = require("./adminController");
const router = (0, express_1.Router)();
// block a User
router.patch('/users/:userId/block', (0, auth_1.default)(userConstant_1.USER_ROLE.admin), adminController_1.adminController.makeBlockUser);
// Delete a Blog
router.delete('/blogs/:id', (0, auth_1.default)(userConstant_1.USER_ROLE.admin), adminController_1.adminController.deleteBlog);
exports.adminRoutes = router;
