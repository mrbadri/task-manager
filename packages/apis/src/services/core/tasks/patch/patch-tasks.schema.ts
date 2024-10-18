import { z } from "zod";

// Response
export const patchTasksRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const patchTasksResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const patchTasksSchema = {
  response: patchTasksResponseSchemaTransofrmed,
  request: patchTasksRequestSchemaTransformed,
};
