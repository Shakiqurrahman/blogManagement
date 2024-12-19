import { z } from 'zod';

const createValidation = z.object({
    title: z.string({ required_error: 'Title is required' }),
    content: z.string({ required_error: 'Content is required' }),
});

const updateValidation = createValidation.partial();

export const blogValidation = {
    createValidation,
    updateValidation,
};
