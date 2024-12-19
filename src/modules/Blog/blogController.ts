import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { blogServices } from './blogService';
import { blogValidation } from './blogValidation';

const createBlog: RequestHandler = catchAsync(async (req, res) => {
    const { userId } = req.user;
    const validatedData = blogValidation.createValidation.parse(req.body);

    const newBlog = await blogServices.createBlogInToDB({
        ...validatedData,
        author: userId,
    });

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Login successful',
        data: newBlog,
    });
});

export const blogControllers = {
    createBlog,
};
