import { z } from 'zod';

export const createUserSchema = z.object({
  username: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  password: z.string(),
  email: z.string(),
  role: z.string().default('user'),
});
const createUser = createUserSchema.required();
const updateUser = createUserSchema.partial();
export type CreateUserDto = z.infer<typeof createUser>;
export type UpdateUserDto = z.infer<typeof updateUser>;
