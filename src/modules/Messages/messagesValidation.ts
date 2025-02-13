import { z } from 'zod';

const createValidation = z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    message: z.string({ required_error: 'Message is required' }),
});

export const messageValidation = {
    createValidation,
};
