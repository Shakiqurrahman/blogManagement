"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageValidation = void 0;
const zod_1 = require("zod");
const createValidation = zod_1.z.object({
    name: zod_1.z.string({ required_error: 'Name is required' }),
    email: zod_1.z.string({ required_error: 'Email is required' }),
    message: zod_1.z.string({ required_error: 'Message is required' }),
});
exports.messageValidation = {
    createValidation,
};
