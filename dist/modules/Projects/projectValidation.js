"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidation = void 0;
const zod_1 = require("zod");
const createValidation = zod_1.z.object({
    name: zod_1.z.string({ required_error: 'Name is required' }),
    description: zod_1.z.string({ required_error: 'Description is required' }),
    thumbnail: zod_1.z.string().optional(),
    githubLink: zod_1.z.string().optional(),
    liveLink: zod_1.z.string(),
});
const updateValidation = createValidation.partial();
exports.projectValidation = {
    createValidation,
    updateValidation,
};
