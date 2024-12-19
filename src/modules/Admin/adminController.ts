import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { adminService } from './adminService';

const makeBlockUser = catchAsync(async (req, res) => {
    const { userId } = req.params;

    await adminService.makeBlockUserInDB(userId);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'User blocked successfully',
    });
});

const deleteBlog = catchAsync(async (req, res) => {
    const { id } = req.params;
    await adminService.deleteBlogById(id);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'Blog deleted successfully',
    });
});

export const adminController = {
    makeBlockUser,
    deleteBlog,
};
