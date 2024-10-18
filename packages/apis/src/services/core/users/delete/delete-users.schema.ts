import { z } from "zod";

// Response
export const deleteUsersRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const deleteUsersResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const deleteUsersSchema = {
  response: deleteUsersResponseSchemaTransofrmed,
  request: deleteUsersRequestSchemaTransformed,
};
