import { z } from "zod";
import { putTasksSchema } from "./put-tasks.schema";

// Response
export type PutTasksRequest = z.input<typeof putTasksSchema.request>;

export type PutTasksRequestTransofrmed = z.infer<
  typeof putTasksSchema.request
>;

// Request
export type PutTasksResponse = z.input<typeof putTasksSchema.response>;

export type PutTasksResponseTransformed = z.infer<
  typeof putTasksSchema.response
>;
