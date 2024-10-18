import { z } from "zod";
import { patchTaskDetailSchema } from "./patch-task-detail.schema";

// Response
export type PatchTaskDetailRequest = z.input<typeof patchTaskDetailSchema.request>;

export type PatchTaskDetailRequestTransofrmed = z.infer<
  typeof patchTaskDetailSchema.request
>;

// Request
export type PatchTaskDetailResponse = z.input<typeof patchTaskDetailSchema.response>;

export type PatchTaskDetailResponseTransformed = z.infer<
  typeof patchTaskDetailSchema.response
>;
