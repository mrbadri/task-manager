import { z } from "zod";

// Response
export const deleteTaskDetailRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const deleteTaskDetailResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const deleteTaskDetailSchema = {
  response: deleteTaskDetailResponseSchemaTransofrmed,
  request: deleteTaskDetailRequestSchemaTransformed,
};
