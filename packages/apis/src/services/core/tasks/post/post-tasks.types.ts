import { z } from "zod";
import { postTasksSchema } from "./post-tasks.schema";

// Response
export type PostTasksRequest = z.input<typeof postTasksSchema.request>;

export type PostTasksRequestTransofrmed = z.infer<
  typeof postTasksSchema.request
>;

// Request
export type PostTasksResponse = z.input<typeof postTasksSchema.response>;

export type PostTasksResponseTransformed = z.infer<
  typeof postTasksSchema.response
>;
