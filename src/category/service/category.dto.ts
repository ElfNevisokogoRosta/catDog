import { z } from 'zod';

export const categorySchema = z.object({
  name: z.string(),
  dis: z.string(),
});
const createCategory = categorySchema.required();
const updateCategory = categorySchema.partial();
export type CreateCategoryDto = z.infer<typeof createCategory>;
export type UpdateCategoryDto = z.infer<typeof updateCategory>;
