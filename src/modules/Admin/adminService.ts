import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Blog } from '../Blog/blogModel';
import { User } from '../User/userModel';

const makeBlockUserInDB = async (userId: string) => {
    const user = await User.findByIdAndUpdate(
        userId,
        { isBlocked: true },
        { new: true },
    );

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User not found');
    }
    return;
};

const deleteBlogById = async (blogId: string) => {
    const result = await Blog.findByIdAndDelete(blogId);
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
    }
    return;
};

export const adminService = {
    makeBlockUserInDB,
    deleteBlogById,
};
