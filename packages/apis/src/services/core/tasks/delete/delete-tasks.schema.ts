import { z } from "zod";

// Response
export const deleteTasksRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const deleteTasksResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const deleteTasksSchema = {
  response: deleteTasksResponseSchemaTransofrmed,
  request: deleteTasksRequestSchemaTransformed,
};
