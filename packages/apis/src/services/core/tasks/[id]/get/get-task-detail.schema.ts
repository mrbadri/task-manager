import { z } from "zod";

// Response
export const getTaskDetailRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const getTaskDetailResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const getTaskDetailSchema = {
  response: getTaskDetailResponseSchemaTransofrmed,
  request: getTaskDetailRequestSchemaTransformed,
};
