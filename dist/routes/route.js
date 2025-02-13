"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = require("../middlewares/multer");
const adminRoute_1 = require("../modules/Admin/adminRoute");
const authRoute_1 = require("../modules/Auth/authRoute");
const blogRoute_1 = require("../modules/Blog/blogRoute");
const messagesRoutes_1 = require("../modules/Messages/messagesRoutes");
const projectRoute_1 = require("../modules/Projects/projectRoute");
const cloudinary_1 = require("../utils/cloudinary");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: authRoute_1.authRoutes,
    },
    {
        path: '/blogs',
        route: blogRoute_1.blogRoutes,
    },
    {
        path: '/projects',
        route: projectRoute_1.projectRoutes,
    },
    {
        path: '/messages',
        route: messagesRoutes_1.messageRoutes,
    },
    {
        path: '/admin',
        route: adminRoute_1.adminRoutes,
    },
];
router.post('/uploads', multer_1.upload.any(), cloudinary_1.uploadToCloudinary);
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
