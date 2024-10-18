import { z } from "zod";
import { deleteTasksSchema } from "./delete-tasks.schema";

// Response
export type DeleteTasksRequest = z.input<typeof deleteTasksSchema.request>;

export type DeleteTasksRequestTransofrmed = z.infer<
  typeof deleteTasksSchema.request
>;

// Request
export type DeleteTasksResponse = z.input<typeof deleteTasksSchema.response>;

export type DeleteTasksResponseTransformed = z.infer<
  typeof deleteTasksSchema.response
>;
