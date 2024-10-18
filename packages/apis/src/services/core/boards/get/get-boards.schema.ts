import { z } from "zod";

// Response
export const getBoardsRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const getBoardsResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const getBoardsSchema = {
  response: getBoardsResponseSchemaTransofrmed,
  request: getBoardsRequestSchemaTransformed,
};
