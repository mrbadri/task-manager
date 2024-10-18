import { z } from "zod";
import { putBoardsSchema } from "./put-boards.schema";

// Response
export type PutBoardsRequest = z.input<typeof putBoardsSchema.request>;

export type PutBoardsRequestTransofrmed = z.infer<
  typeof putBoardsSchema.request
>;

// Request
export type PutBoardsResponse = z.input<typeof putBoardsSchema.response>;

export type PutBoardsResponseTransformed = z.infer<
  typeof putBoardsSchema.response
>;
