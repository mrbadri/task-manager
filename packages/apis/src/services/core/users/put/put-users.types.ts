import { z } from "zod";
import { putUsersSchema } from "./put-users.schema";

// Response
export type PutUsersRequest = z.input<typeof putUsersSchema.request>;

export type PutUsersRequestTransofrmed = z.infer<
  typeof putUsersSchema.request
>;

// Request
export type PutUsersResponse = z.input<typeof putUsersSchema.response>;

export type PutUsersResponseTransformed = z.infer<
  typeof putUsersSchema.response
>;
