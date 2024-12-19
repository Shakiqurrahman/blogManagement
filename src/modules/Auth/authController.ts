import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { authServices } from './authService';
import { authValidation } from './authValidation';

const registerUser: RequestHandler = catchAsync(async (req, res) => {
    const validatedData = authValidation.registerValidationSchema.parse(
        req.body,
    );

    const newUser = await authServices.registerUserIntoDB(validatedData);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'User registered successfully',
        data: newUser,
    });
});

const loginUser: RequestHandler = catchAsync(async (req, res) => {
    const validatedData = authValidation.loginValidationSchema.parse(req.body);

    const user = await authServices.loginUserFromDB(validatedData);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'User Logged In successfully',
        data: user,
    });
});

export const authControllers = {
    registerUser,
    loginUser,
};
