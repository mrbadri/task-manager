import { z } from "zod";
import { putTaskDetailSchema } from "./put-task-detail.schema";

// Response
export type PutTaskDetailRequest = z.input<typeof putTaskDetailSchema.request>;

export type PutTaskDetailRequestTransofrmed = z.infer<
  typeof putTaskDetailSchema.request
>;

// Request
export type PutTaskDetailResponse = z.input<typeof putTaskDetailSchema.response>;

export type PutTaskDetailResponseTransformed = z.infer<
  typeof putTaskDetailSchema.response
>;
