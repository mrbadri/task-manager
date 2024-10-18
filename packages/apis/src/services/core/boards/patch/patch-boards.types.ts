import { z } from "zod";
import { patchBoardsSchema } from "./patch-boards.schema";

// Response
export type PatchBoardsRequest = z.input<typeof patchBoardsSchema.request>;

export type PatchBoardsRequestTransofrmed = z.infer<
  typeof patchBoardsSchema.request
>;

// Request
export type PatchBoardsResponse = z.input<typeof patchBoardsSchema.response>;

export type PatchBoardsResponseTransformed = z.infer<
  typeof patchBoardsSchema.response
>;
