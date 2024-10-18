import { z } from "zod";

// Response
export const putUsersRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const putUsersResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const putUsersSchema = {
  response: putUsersResponseSchemaTransofrmed,
  request: putUsersRequestSchemaTransformed,
};
