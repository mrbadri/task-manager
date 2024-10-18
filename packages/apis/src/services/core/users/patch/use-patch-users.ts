import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { patchUsers } from "./patch-users";
import {} from "./patch-users.schema";
import {
  PatchUsersRequest,
  PatchUsersResponseTransformed,
} from "./patch-users.types";

export type UsePatchUsersProps = UseMutationProps<
  ApiResponse<PatchUsersResponseTransformed>,
  ApiError,
  PatchUsersRequest
>;

export const patchUsersQueryKey = () => ["patchUsers"];

export const UsePatchUsers = (props?: UsePatchUsersProps) => {
  const mutation = useMutation<
    ApiResponse<PatchUsersResponseTransformed>,
    ApiError,
    PatchUsersRequest
  >({
    mutationKey: patchUsersQueryKey(),
    mutationFn: (data) => patchUsers(data),
    ...props,
  });

  return mutation;
};
