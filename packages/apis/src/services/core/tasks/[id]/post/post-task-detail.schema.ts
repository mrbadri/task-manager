import { z } from "zod";

// Response
export const postTaskDetailRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const postTaskDetailResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const postTaskDetailSchema = {
  response: postTaskDetailResponseSchemaTransofrmed,
  request: postTaskDetailRequestSchemaTransformed,
};
