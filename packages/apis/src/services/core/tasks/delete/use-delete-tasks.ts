import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteTasks } from "./delete-tasks";
import {} from "./delete-tasks.schema";
import {
  DeleteTasksRequest,
  DeleteTasksResponseTransformed,
} from "./delete-tasks.types";

export type UseDeleteTasksProps = UseMutationProps<
  ApiResponse<DeleteTasksResponseTransformed>,
  ApiError,
  DeleteTasksRequest
>;

export const deleteTasksQueryKey = () => ["deleteTasks"];

export const UseDeleteTasks = (props?: UseDeleteTasksProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteTasksResponseTransformed>,
    ApiError,
    DeleteTasksRequest
  >({
    mutationKey: deleteTasksQueryKey(),
    mutationFn: (data) => deleteTasks(data),
    ...props,
  });

  return mutation;
};
