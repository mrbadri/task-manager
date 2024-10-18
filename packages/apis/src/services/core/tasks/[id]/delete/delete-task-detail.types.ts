import { z } from "zod";
import { deleteTaskDetailSchema } from "./delete-task-detail.schema";

// Response
export type DeleteTaskDetailRequest = z.input<typeof deleteTaskDetailSchema.request>;

export type DeleteTaskDetailRequestTransofrmed = z.infer<
  typeof deleteTaskDetailSchema.request
>;

// Request
export type DeleteTaskDetailResponse = z.input<typeof deleteTaskDetailSchema.response>;

export type DeleteTaskDetailResponseTransformed = z.infer<
  typeof deleteTaskDetailSchema.response
>;
