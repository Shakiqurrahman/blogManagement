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
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true },
);

export const Blog = model<TBlog>('Blog', blogModel);
