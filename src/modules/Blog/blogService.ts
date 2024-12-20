import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { blogSearchableFields } from './blogConstants';
import { IAuthor, TBlog } from './blogInterface';
import { Blog } from './blogModel';

const createBlogInToDB = async (payload: TBlog) => {
    const newBlog = (await Blog.create(payload)).populate({
        path: 'author',
    });
    return newBlog;
};

const updateBlogInToDB = async (
    id: string,
    userId: string,
    payload: Partial<TBlog>,
) => {
    const blog = await Blog.findById(id).populate('author').lean();
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
    }

    // Check if the user is authorized
    if ((blog.author as IAuthor)._id.toString() !== userId) {
        throw new AppError(
            httpStatus.UNAUTHORIZED,
            'Unauthorized to update blog',
        );
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return updatedBlog;
};

const deleteBlogFromDB = async (id: string, userId: string) => {
    const blog = await Blog.findById(id).populate('author').lean();
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
    }

    // Check if the user is authorized
    if ((blog.author as IAuthor)._id.toString() !== userId) {
        throw new AppError(
            httpStatus.UNAUTHORIZED,
            'Unauthorized to delete blog',
        );
    }

    await Blog.findByIdAndDelete(id);
    return;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
    const blogsQuery = new QueryBuilder(Blog.find().populate('author'), query)
        .search(blogSearchableFields)
        .filter()
        .sortBy();

    const result = await blogsQuery.modelQuery;
    return result;
};

export const blogServices = {
    createBlogInToDB,
    updateBlogInToDB,
    deleteBlogFromDB,
    getAllBlogsFromDB,
};
