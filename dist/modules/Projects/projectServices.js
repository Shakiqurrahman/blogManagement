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
exports.projectService = void 0;
const AppError_1 = __importDefault(require("../../errors/AppError"));
const projectModel_1 = require("./projectModel");
const createProjectInDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield projectModel_1.Project.create(payload);
    return project;
});
const getAllProjectsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield projectModel_1.Project.find().sort({ createdAt: -1 });
    return projects;
});
const getProjectByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield projectModel_1.Project.findById(id);
    if (!project) {
        throw new AppError_1.default(httpStatus.NOT_FOUND, 'Project not found');
    }
    return project;
});
const updateProjectInDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProject = yield projectModel_1.Project.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!updatedProject) {
        throw new AppError_1.default(httpStatus.NOT_FOUND, 'Project not found');
    }
    return updatedProject;
});
const deleteProjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield projectModel_1.Project.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.default(httpStatus.NOT_FOUND, 'Project not found');
    }
    return;
});
exports.projectService = {
    createProjectInDB,
    getAllProjectsFromDB,
    getProjectByIdFromDB,
    updateProjectInDB,
    deleteProjectById,
};
