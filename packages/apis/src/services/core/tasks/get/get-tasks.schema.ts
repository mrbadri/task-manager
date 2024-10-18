import { z } from "zod";

// Response
export const getTasksRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const getTasksResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const getTasksSchema = {
  response: getTasksResponseSchemaTransofrmed,
  request: getTasksRequestSchemaTransformed,
};
