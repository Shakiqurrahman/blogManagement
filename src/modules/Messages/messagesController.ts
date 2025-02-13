import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { messageService } from './messageServices';
import { messageValidation } from './messagesValidation';

export const createmessage = catchAsync(async (req, res) => {
    const validatedData = messageValidation.createValidation.parse(req.body);

    const newMessage = await messageService.createMessageInDB(validatedData);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Message created successfully',
        data: newMessage,
    });
});

export const getAllMessages = catchAsync(async (req, res) => {
    const allMessages = await messageService.getAllMessagesInDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        data: allMessages,
        message: 'All messages retrieved successfully',
    });
});

export const deleteMessageById = catchAsync(async (req, res) => {
    const { id } = req.params;
    await messageService.deleteMessageByIdInDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Message deleted successfully',
    });
});

export const messageController = {
    createmessage,
    getAllMessages,
    deleteMessageById,
};
