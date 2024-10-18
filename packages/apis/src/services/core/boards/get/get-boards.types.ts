import { z } from "zod";
import { getBoardsSchema } from "./get-boards.schema";

// Response
export type GetBoardsRequest = z.input<typeof getBoardsSchema.request>;

export type GetBoardsRequestTransofrmed = z.infer<
  typeof getBoardsSchema.request
>;

// Request
export type GetBoardsResponse = z.input<typeof getBoardsSchema.response>;

export type GetBoardsResponseTransformed = z.infer<
  typeof getBoardsSchema.response
>;
