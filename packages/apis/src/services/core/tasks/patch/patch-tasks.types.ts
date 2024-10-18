import { z } from "zod";
import { patchTasksSchema } from "./patch-tasks.schema";

// Response
export type PatchTasksRequest = z.input<typeof patchTasksSchema.request>;

export type PatchTasksRequestTransofrmed = z.infer<
  typeof patchTasksSchema.request
>;

// Request
export type PatchTasksResponse = z.input<typeof patchTasksSchema.response>;

export type PatchTasksResponseTransformed = z.infer<
  typeof patchTasksSchema.response
>;
