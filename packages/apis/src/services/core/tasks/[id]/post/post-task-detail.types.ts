import { z } from "zod";
import { postTaskDetailSchema } from "./post-task-detail.schema";

// Response
export type PostTaskDetailRequest = z.input<typeof postTaskDetailSchema.request>;

export type PostTaskDetailRequestTransofrmed = z.infer<
  typeof postTaskDetailSchema.request
>;

// Request
export type PostTaskDetailResponse = z.input<typeof postTaskDetailSchema.response>;

export type PostTaskDetailResponseTransformed = z.infer<
  typeof postTaskDetailSchema.response
>;
