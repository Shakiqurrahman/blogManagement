import { model, Schema } from 'mongoose';
import { TProject } from './projectInterface';

const projectModel = new Schema<TProject>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        thumbnail: {
            type: String,
        },
        liveLink: String,
        githubLink: String,
    },
    { timestamps: true },
);

export const Project = model<TProject>('Project', projectModel);
