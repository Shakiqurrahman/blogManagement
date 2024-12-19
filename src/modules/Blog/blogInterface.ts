import { ObjectId } from 'mongoose';
import { TUser } from '../User/userInterface';

export interface IAuthor extends TUser {
    _id: ObjectId;
}

export type TBlog = {
    title: string;
    content: string;
    author: ObjectId | IAuthor;
    isPublished?: boolean;
};
