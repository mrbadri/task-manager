import { z } from "zod";

// Response
export const patchUsersRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const patchUsersResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const patchUsersSchema = {
  response: patchUsersResponseSchemaTransofrmed,
  request: patchUsersRequestSchemaTransformed,
};
