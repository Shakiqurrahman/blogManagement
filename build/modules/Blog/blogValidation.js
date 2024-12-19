"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogValidation = void 0;
const zod_1 = require("zod");
const createValidation = zod_1.z.object({
    title: zod_1.z.string({ required_error: 'Title is required' }),
    content: zod_1.z.string({ required_error: 'Content is required' }),
});
exports.blogValidation = {
    createValidation,
};