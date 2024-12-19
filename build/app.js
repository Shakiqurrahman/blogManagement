"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = require("./config/config");
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const route_1 = __importDefault(require("./routes/route"));
exports.app = (0, express_1.default)();
// middlewares
exports.app.use(express_1.default.json({ limit: '50kb' }));
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use((0, cors_1.default)(config_1.corsOptions));
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cookie_parser_1.default)());
// routes
exports.app.get('/', (req, res) => {
    res.send('Hello, World!');
});
exports.app.use('/api', route_1.default);
// Not Found Handler [should be after all routes]
exports.app.use(notFound_1.default);
// Global Error Handler [Always should be not found handlers]
exports.app.use(globalErrorHandler_1.default);