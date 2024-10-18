import { z } from "zod";

// Response
export const postBoardsRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const postBoardsResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const postBoardsSchema = {
  response: postBoardsResponseSchemaTransofrmed,
  request: postBoardsRequestSchemaTransformed,
};
