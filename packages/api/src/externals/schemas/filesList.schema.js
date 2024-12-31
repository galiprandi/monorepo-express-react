import { z } from 'zod';

export const filesListSchema = z.object({
    files: z.array(z.string())
});
