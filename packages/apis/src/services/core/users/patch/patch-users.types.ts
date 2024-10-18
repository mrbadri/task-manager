import { z } from "zod";
import { patchUsersSchema } from "./patch-users.schema";

// Response
export type PatchUsersRequest = z.input<typeof patchUsersSchema.request>;

export type PatchUsersRequestTransofrmed = z.infer<
  typeof patchUsersSchema.request
>;

// Request
export type PatchUsersResponse = z.input<typeof patchUsersSchema.response>;

export type PatchUsersResponseTransformed = z.infer<
  typeof patchUsersSchema.response
>;
