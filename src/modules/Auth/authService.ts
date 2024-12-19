/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from '../User/userInterface';
import { User } from '../User/userModel';
import { TLoginPayload, TRegisterPayload } from './authInterface';

const registerUserIntoDB = async (
    payload: TRegisterPayload,
): Promise<Omit<TUser, 'password'>> => {
    const isUserRegistered = await User.findOne({ email: payload.email });

    if (isUserRegistered) {
        throw new AppError(httpStatus.CONFLICT, 'User already exists');
    }

    const newUser = await User.create(payload);
    const { password, ...data } = newUser.toObject();
    return data;
};

const loginUserFromDB = async (
    payload: TLoginPayload,
): Promise<Omit<TUser, 'password'>> => {
    const user = await User.findOne({ email: payload.email }).select(
        '+password',
    );

    if (!user || !(await user.comparePassword(payload.password))) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'Invalid credentials');
    }

    if (user.isBlocked) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'This user is blocked');
    }
    const { password, ...data } = user.toObject();
    return data;
};

export const authServices = {
    registerUserIntoDB,
    loginUserFromDB,
};
