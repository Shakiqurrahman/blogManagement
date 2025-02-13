import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { blogServices } from './blogService';
import { blogValidation } from './blogValidation';

const createBlog: RequestHandler = catchAsync(async (req, res) => {
    const validatedData = blogValidation.createValidation.parse(req.body);
    const newBlog = await blogServices.createBlogInToDB(validatedData);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog created successfully',
        data: newBlog,
    });
});

const updateBlog: RequestHandler = catchAsync(async (req, res) => {
    const { id } = req.params;
    const validatedData = blogValidation.updateValidation.parse(req.body);
    const updatedBlog = await blogServices.updateBlogInToDB(id, validatedData);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog updated successfully',
        data: updatedBlog,
    });
});

const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
    const { id } = req.params;
    await blogServices.deleteBlogFromDB(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog deleted successfully',
    });
});

const getAllBlogs: RequestHandler = catchAsync(async (req, res) => {
    const blogs = await blogServices.getAllBlogsFromDB(req.query);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blogs fetched successfully',
        data: blogs,
    });
});
const getBlogById: RequestHandler = catchAsync(async (req, res) => {
    const { id } = req.params;
    const blog = await blogServices.getBlogByIdFromDB(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog retrived successfully',
        data: blog,
    });
});

export const blogControllers = {
    createBlog,
    updateBlog,
    deleteBlog,
    getAllBlogs,
    getBlogById,
};
