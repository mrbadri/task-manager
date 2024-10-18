import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { putTasks } from "./put-tasks";
import {} from "./put-tasks.schema";
import {
  PutTasksRequest,
  PutTasksResponseTransformed,
} from "./put-tasks.types";

export type UsePutTasksProps = UseMutationProps<
  ApiResponse<PutTasksResponseTransformed>,
  ApiError,
  PutTasksRequest
>;

export const putTasksQueryKey = () => ["putTasks"];

export const UsePutTasks = (props?: UsePutTasksProps) => {
  const mutation = useMutation<
    ApiResponse<PutTasksResponseTransformed>,
    ApiError,
    PutTasksRequest
  >({
    mutationKey: putTasksQueryKey(),
    mutationFn: (data) => putTasks(data),
    ...props,
  });

  return mutation;
};
