import AppError from '../../errors/AppError';
import { TProject } from './projectInterface';
import { Project } from './projectModel';

const createProjectInDB = async (payload: TProject) => {
    const project = await Project.create(payload);
    return project;
};

const getAllProjectsFromDB = async () => {
    const projects = await Project.find().sort({ createdAt: -1 });
    return projects;
};

const getProjectByIdFromDB = async (id: string) => {
    const project = await Project.findById(id);
    if (!project) {
        throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
    }
    return project;
};

const updateProjectInDB = async (id: string, payload: Partial<TProject>) => {
    const updatedProject = await Project.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!updatedProject) {
        throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
    }
    return updatedProject;
};

const deleteProjectById = async (id: string) => {
    const result = await Project.findByIdAndDelete(id);
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'Project not found');
    }
    return;
};

export const projectService = {
    createProjectInDB,
    getAllProjectsFromDB,
    getProjectByIdFromDB,
    updateProjectInDB,
    deleteProjectById,
};
