import { z } from "zod";

export const AuthLocalResponseSchema = z.object({
  jwt: z.string(),
  user: z.object({
    id: z.number(),
    username: z.string(),
    email: z.string().email(),
    provider: z.string(),
    confirmed: z.boolean(),
    blocked: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
});

export const AuthLocalRequestSchema = z.object({
  id: z.number(),
});
