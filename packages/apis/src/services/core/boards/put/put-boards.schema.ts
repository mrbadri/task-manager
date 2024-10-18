import { z } from "zod";

// Response
export const putBoardsRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const putBoardsResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const putBoardsSchema = {
  response: putBoardsResponseSchemaTransofrmed,
  request: putBoardsRequestSchemaTransformed,
};
