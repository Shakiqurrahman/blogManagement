import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { projectService } from './projectServices';
import { projectValidation } from './projectValidation';

const createProject = catchAsync(async (req, res) => {
    const validatedData = projectValidation.createValidation.parse(req.body);

    const project = await projectService.createProjectInDB(validatedData);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        message: 'Project created successfully',
        success: true,
        data: project,
    });
});

const getAllProjects = catchAsync(async (req, res) => {
    const projects = await projectService.getAllProjectsFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: 'Projects fetched successfully',
        success: true,
        data: projects,
    });
});

const getProjectById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const project = await projectService.getProjectByIdFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: 'Project fetched successfully',
        success: true,
        data: project,
    });
});

const updateProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    const validatedData = projectValidation.updateValidation.parse(req.body);

    const updatedProject = await projectService.updateProjectInDB(
        id,
        validatedData,
    );

    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: 'Project updated successfully',
        success: true,
        data: updatedProject,
    });
});

const deleteProject = catchAsync(async (req, res) => {
    const { id } = req.params;
    await projectService.deleteProjectById(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        message: 'Project deleted successfully',
        success: true,
    });
});

export const projectController = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
};
