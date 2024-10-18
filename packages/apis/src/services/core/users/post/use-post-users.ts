import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postUsers } from "./post-users";
import {} from "./post-users.schema";
import {
  PostUsersRequest,
  PostUsersResponseTransformed,
} from "./post-users.types";

export type UsePostUsersProps = UseMutationProps<
  ApiResponse<PostUsersResponseTransformed>,
  ApiError,
  PostUsersRequest
>;

export const postUsersQueryKey = () => ["postUsers"];

export const UsePostUsers = (props?: UsePostUsersProps) => {
  const mutation = useMutation<
    ApiResponse<PostUsersResponseTransformed>,
    ApiError,
    PostUsersRequest
  >({
    mutationKey: postUsersQueryKey(),
    mutationFn: (data) => postUsers(data),
    ...props,
  });

  return mutation;
};
