import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { blogSearchableFields } from './blogConstants';
import { TBlog } from './blogInterface';
import { Blog } from './blogModel';

const createBlogInToDB = async (payload: TBlog) => {
    const newBlog = await Blog.create(payload);
    return newBlog;
};

const updateBlogInToDB = async (id: string, payload: Partial<TBlog>) => {
    const blog = await Blog.findById(id).lean();
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
    }

    const updatedBlog = await Blog.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return updatedBlog;
};

const deleteBlogFromDB = async (id: string) => {
    const blog = await Blog.findById(id).lean();
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
    }
    await Blog.findByIdAndDelete(id);
    return;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
    const blogsQuery = new QueryBuilder(Blog.find(), query)
        .search(blogSearchableFields)
        .filter()
        .sortBy();

    const result = await blogsQuery.modelQuery;
    return result;
};

const getBlogByIdFromDB = async (id: string) => {
    const blog = await Blog.findById(id).lean();
    if (!blog) {
        throw new AppError(httpStatus.NOT_FOUND, 'Blog is not found');
    }
    return blog;
};

export const blogServices = {
    createBlogInToDB,
    updateBlogInToDB,
    deleteBlogFromDB,
    getAllBlogsFromDB,
    getBlogByIdFromDB,
};
