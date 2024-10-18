import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { putUsers } from "./put-users";
import {} from "./put-users.schema";
import {
  PutUsersRequest,
  PutUsersResponseTransformed,
} from "./put-users.types";

export type UsePutUsersProps = UseMutationProps<
  ApiResponse<PutUsersResponseTransformed>,
  ApiError,
  PutUsersRequest
>;

export const putUsersQueryKey = () => ["putUsers"];

export const UsePutUsers = (props?: UsePutUsersProps) => {
  const mutation = useMutation<
    ApiResponse<PutUsersResponseTransformed>,
    ApiError,
    PutUsersRequest
  >({
    mutationKey: putUsersQueryKey(),
    mutationFn: (data) => putUsers(data),
    ...props,
  });

  return mutation;
};
