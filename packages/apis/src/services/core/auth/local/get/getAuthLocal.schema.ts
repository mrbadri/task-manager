import { z } from "zod";

export const getAuthLocalResponseSchema = z.object({
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

export const getAuthLocalRequestSchema = z.object({
  id: z.number(),
});
