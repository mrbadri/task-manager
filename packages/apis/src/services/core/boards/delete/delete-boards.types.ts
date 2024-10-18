import { z } from "zod";
import { deleteBoardsSchema } from "./delete-boards.schema";

// Response
export type DeleteBoardsRequest = z.input<typeof deleteBoardsSchema.request>;

export type DeleteBoardsRequestTransofrmed = z.infer<
  typeof deleteBoardsSchema.request
>;

// Request
export type DeleteBoardsResponse = z.input<typeof deleteBoardsSchema.response>;

export type DeleteBoardsResponseTransformed = z.infer<
  typeof deleteBoardsSchema.response
>;
