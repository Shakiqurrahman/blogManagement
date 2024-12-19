"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = require("express");
const authController_1 = require("./authController");
const router = (0, express_1.Router)();
router.post('/register', authController_1.authControllers.registerUser);
router.post('/login', authController_1.authControllers.loginUser);
exports.authRoutes = router;