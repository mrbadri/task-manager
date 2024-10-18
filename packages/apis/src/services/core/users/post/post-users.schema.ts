import { z } from "zod";

// Response
export const postUsersRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const postUsersResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const postUsersSchema = {
  response: postUsersResponseSchemaTransofrmed,
  request: postUsersRequestSchemaTransformed,
};
