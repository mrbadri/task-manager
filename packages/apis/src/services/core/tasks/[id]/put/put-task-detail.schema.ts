import { z } from "zod";

// Response
export const putTaskDetailRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const putTaskDetailResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const putTaskDetailSchema = {
  response: putTaskDetailResponseSchemaTransofrmed,
  request: putTaskDetailRequestSchemaTransformed,
};
