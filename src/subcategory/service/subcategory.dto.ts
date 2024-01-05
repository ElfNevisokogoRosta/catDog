import { z } from 'zod';
export const subcategorySchema = z.object({
  name: z.string(),
  categoryId: z.number()
});
export type SubcategoryDto = z.infer<typeof subcategorySchema>;
