import { z } from "zod";
import { postBoardsSchema } from "./post-boards.schema";

// Response
export type PostBoardsRequest = z.input<typeof postBoardsSchema.request>;

export type PostBoardsRequestTransofrmed = z.infer<
  typeof postBoardsSchema.request
>;

// Request
export type PostBoardsResponse = z.input<typeof postBoardsSchema.response>;

export type PostBoardsResponseTransformed = z.infer<
  typeof postBoardsSchema.response
>;
