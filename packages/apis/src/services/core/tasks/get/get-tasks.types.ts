import { z } from "zod";
import { getTasksSchema } from "./get-tasks.schema";

// Response
export type GetTasksRequest = z.input<typeof getTasksSchema.request>;

export type GetTasksRequestTransofrmed = z.infer<
  typeof getTasksSchema.request
>;

// Request
export type GetTasksResponse = z.input<typeof getTasksSchema.response>;

export type GetTasksResponseTransformed = z.infer<
  typeof getTasksSchema.response
>;
