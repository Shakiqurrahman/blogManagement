import { model, Schema } from 'mongoose';
import { TBlog } from './blogInterface';

const blogModel = new Schema<TBlog>(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        authorName: {
            type: String,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
        thumbnail: {
            type: String,
        },
    },
    { timestamps: true },
);

export const Blog = model<TBlog>('Blog', blogModel);
