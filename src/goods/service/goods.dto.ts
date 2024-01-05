import { z } from 'zod';

export const goodsSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  dis: z.string(),
  rate: z.number().optional().default(null),
  price: z.number(),
  sales: z.boolean().default(false),
  discount: z.number().default(0),
  characteristic: z.record(z.unknown()),
  category: z.number(),
  subcategory: z.number(),
});
const createGoods = goodsSchema;
const updateGoods = goodsSchema.partial();
export type CreateGoodsDto = z.infer<typeof createGoods>;
export type UpdateGoodsDto = z.infer<typeof updateGoods>;
