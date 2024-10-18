import { z } from "zod";
import { deleteUsersSchema } from "./delete-users.schema";

// Response
export type DeleteUsersRequest = z.input<typeof deleteUsersSchema.request>;

export type DeleteUsersRequestTransofrmed = z.infer<
  typeof deleteUsersSchema.request
>;

// Request
export type DeleteUsersResponse = z.input<typeof deleteUsersSchema.response>;

export type DeleteUsersResponseTransformed = z.infer<
  typeof deleteUsersSchema.response
>;
