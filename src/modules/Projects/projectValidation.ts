import { z } from 'zod';

const createValidation = z.object({
    name: z.string({ required_error: 'Name is required' }),
    description: z.string({ required_error: 'Description is required' }),
    thumbnail: z.string().optional(),
    githubLink: z.string().optional(),
    liveLink: z.string(),
});

const updateValidation = createValidation.partial();

export const projectValidation = {
    createValidation,
    updateValidation,
};
