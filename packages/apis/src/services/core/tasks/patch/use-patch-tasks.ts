import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { patchTasks } from "./patch-tasks";
import {} from "./patch-tasks.schema";
import {
  PatchTasksRequest,
  PatchTasksResponseTransformed,
} from "./patch-tasks.types";

export type UsePatchTasksProps = UseMutationProps<
  ApiResponse<PatchTasksResponseTransformed>,
  ApiError,
  PatchTasksRequest
>;

export const patchTasksQueryKey = () => ["patchTasks"];

export const UsePatchTasks = (props?: UsePatchTasksProps) => {
  const mutation = useMutation<
    ApiResponse<PatchTasksResponseTransformed>,
    ApiError,
    PatchTasksRequest
  >({
    mutationKey: patchTasksQueryKey(),
    mutationFn: (data) => patchTasks(data),
    ...props,
  });

  return mutation;
};
