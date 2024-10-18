import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postTasks } from "./post-tasks";
import {} from "./post-tasks.schema";
import {
  PostTasksRequest,
  PostTasksResponseTransformed,
} from "./post-tasks.types";

export type UsePostTasksProps = UseMutationProps<
  ApiResponse<PostTasksResponseTransformed>,
  ApiError,
  PostTasksRequest
>;

export const postTasksQueryKey = () => ["postTasks"];

export const UsePostTasks = (props?: UsePostTasksProps) => {
  const mutation = useMutation<
    ApiResponse<PostTasksResponseTransformed>,
    ApiError,
    PostTasksRequest
  >({
    mutationKey: postTasksQueryKey(),
    mutationFn: (data) => postTasks(data),
    ...props,
  });

  return mutation;
};
