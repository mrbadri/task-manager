import { z } from "zod";

// Response
export const putTasksRequestSchemaTransformed = z
  .object({
    keyPayload: z.string(),
  })
  .transform((data) => data);

// Request
export const putTasksResponseSchemaTransofrmed = z
  .object({
    keyBody: z.string(),
  })
  .transform((data) => data);

export const putTasksSchema = {
  response: putTasksResponseSchemaTransofrmed,
  request: putTasksRequestSchemaTransformed,
};
