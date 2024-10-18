import { z } from "zod";

// Response
export const postLoginRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const postLoginResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const postLoginSchema = {
  response: postLoginResponseSchemaTransofrmed,
  request: postLoginRequestSchemaTransformed,
};
