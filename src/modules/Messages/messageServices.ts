import { TMessage } from './messagesInterface';
import { Message } from './messagesModel';

const createMessageInDB = async (payload: TMessage) => {
    const newMessage = await Message.create(payload);
    return newMessage;
};

const getAllMessagesInDB = async () => {
    const messages = await Message.find();
    return messages;
};

const deleteMessageByIdInDB = async (id: string) => {
    const result = await Message.findByIdAndDelete(id);
    if (!result) {
        throw new Error('Message not found');
    }
    return;
};

export const messageService = {
    createMessageInDB,
    getAllMessagesInDB,
    deleteMessageByIdInDB,
};
