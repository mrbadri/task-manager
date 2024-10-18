import { z } from "zod";

// Response
export const getUsersRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const getUsersResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const getUsersSchema = {
  response: getUsersResponseSchemaTransofrmed,
  request: getUsersRequestSchemaTransformed,
};
