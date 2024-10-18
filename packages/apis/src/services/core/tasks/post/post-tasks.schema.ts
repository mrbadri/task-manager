import { z } from "zod";

// Response
export const postTasksRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const postTasksResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const postTasksSchema = {
  response: postTasksResponseSchemaTransofrmed,
  request: postTasksRequestSchemaTransformed,
};
