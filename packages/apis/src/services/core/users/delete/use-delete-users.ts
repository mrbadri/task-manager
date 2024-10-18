import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteUsers } from "./delete-users";
import {} from "./delete-users.schema";
import {
  DeleteUsersRequest,
  DeleteUsersResponseTransformed,
} from "./delete-users.types";

export type UseDeleteUsersProps = UseMutationProps<
  ApiResponse<DeleteUsersResponseTransformed>,
  ApiError,
  DeleteUsersRequest
>;

export const deleteUsersQueryKey = () => ["deleteUsers"];

export const UseDeleteUsers = (props?: UseDeleteUsersProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteUsersResponseTransformed>,
    ApiError,
    DeleteUsersRequest
  >({
    mutationKey: deleteUsersQueryKey(),
    mutationFn: (data) => deleteUsers(data),
    ...props,
  });

  return mutation;
};
