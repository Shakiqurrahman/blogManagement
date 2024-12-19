import { TBlog } from './blogInterface';
import { Blog } from './blogModel';

const createBlogInToDB = async (payload: TBlog) => {
    const newBlog = (await Blog.create(payload)).populate({
        path: 'author',
    });
    return newBlog;
};

export const blogServices = {
    createBlogInToDB,
};
