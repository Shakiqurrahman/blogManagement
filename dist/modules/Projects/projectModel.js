"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectModel = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
    },
    liveLink: String,
    githubLink: String,
}, { timestamps: true });
exports.Project = (0, mongoose_1.model)('Project', projectModel);
