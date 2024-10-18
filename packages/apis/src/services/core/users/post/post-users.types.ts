import { z } from "zod";
import { postUsersSchema } from "./post-users.schema";

// Response
export type PostUsersRequest = z.input<typeof postUsersSchema.request>;

export type PostUsersRequestTransofrmed = z.infer<
  typeof postUsersSchema.request
>;

// Request
export type PostUsersResponse = z.input<typeof postUsersSchema.response>;

export type PostUsersResponseTransformed = z.infer<
  typeof postUsersSchema.response
>;
