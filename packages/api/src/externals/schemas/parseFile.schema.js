import { z } from 'zod'

export const lineSchema = z.object({
  file: z.string(),
  text: z.string(),
  number: z.number(),
  hex: z.string().length(32)
})
