import { z } from "zod";

// Response
export const patchBoardsRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const patchBoardsResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const patchBoardsSchema = {
  response: patchBoardsResponseSchemaTransofrmed,
  request: patchBoardsRequestSchemaTransformed,
};
