import { z } from "zod";

// Response
export const deleteBoardsRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const deleteBoardsResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const deleteBoardsSchema = {
  response: deleteBoardsResponseSchemaTransofrmed,
  request: deleteBoardsRequestSchemaTransformed,
};
