"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoute_1 = require("../modules/Auth/authRoute");
const blogRoute_1 = require("../modules/Blog/blogRoute");
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
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
