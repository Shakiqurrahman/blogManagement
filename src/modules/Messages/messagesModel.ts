import { model, Schema } from 'mongoose';
import { TMessage } from './messagesInterface';

const messageModel = new Schema<TMessage>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export const Message = model<TMessage>('Message', messageModel);
