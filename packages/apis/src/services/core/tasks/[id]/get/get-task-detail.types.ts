import { z } from "zod";
import { getTaskDetailSchema } from "./get-task-detail.schema";

// Response
export type GetTaskDetailRequest = z.input<typeof getTaskDetailSchema.request>;

export type GetTaskDetailRequestTransofrmed = z.infer<
  typeof getTaskDetailSchema.request
>;

// Request
export type GetTaskDetailResponse = z.input<typeof getTaskDetailSchema.response>;

export type GetTaskDetailResponseTransformed = z.infer<
  typeof getTaskDetailSchema.response
>;
