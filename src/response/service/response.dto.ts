import { z } from 'zod';

export const responseSchema = z.object({
  responce: z.string(),
  user: z.number(),
  goods: z.number(),
  rate: z.number(),
});

const createResponse = responseSchema.required();
const updateResponse = responseSchema.partial();
export type CreateResponseDto = z.infer<typeof createResponse>;
export type UpdateResponseDto = z.infer<typeof updateResponse>;
