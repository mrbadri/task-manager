import { z } from "zod";

// Response
export const patchTaskDetailRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const patchTaskDetailResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const patchTaskDetailSchema = {
  response: patchTaskDetailResponseSchemaTransofrmed,
  request: patchTaskDetailRequestSchemaTransformed,
};
