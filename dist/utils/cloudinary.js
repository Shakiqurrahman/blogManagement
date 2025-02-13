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
exports.uploadToCloudinary = void 0;
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
const config_1 = require("../config/config");
const catchAsync_1 = __importDefault(require("./catchAsync"));
// Cloudinary configuration
cloudinary_1.v2.config({
    cloud_name: config_1.config.CLOUDINARY_CLOUD_NAME,
    api_key: config_1.config.CLOUDINARY_API_KEY,
    api_secret: config_1.config.CLOUDINARY_API_SECRET,
});
exports.uploadToCloudinary = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.files || !(req.files instanceof Array)) {
        res.status(400).json({ error: 'No files uploaded' });
        return;
    }
    const uploadPromises = req.files.map((file) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield cloudinary_1.v2.uploader.upload(file.path, {
            transformation: [
                { width: 800 },
                { quality: 'auto' },
                { fetch_format: 'auto' },
            ],
        });
        // Remove the temporary file after upload
        fs_1.default.unlinkSync(file.path);
        return result.secure_url;
    }));
    try {
        if (req.files.length === 1) {
            const result = yield uploadPromises[0];
            res.status(200).json({ imageUrl: result });
        }
        else {
            const imageUrls = yield Promise.all(uploadPromises);
            res.status(200).json({ imageUrls });
        }
    }
    catch (error) {
        next(error); // Pass error to the error handler middleware
    }
}));
