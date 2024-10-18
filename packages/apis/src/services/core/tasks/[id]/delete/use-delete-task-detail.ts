import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteTaskDetail } from "./delete-task-detail";
import {} from "./delete-task-detail.schema";
import {
  DeleteTaskDetailRequest,
  DeleteTaskDetailResponseTransformed,
} from "./delete-task-detail.types";

export type UseDeleteTaskDetailProps = UseMutationProps<
  ApiResponse<DeleteTaskDetailResponseTransformed>,
  ApiError,
  DeleteTaskDetailRequest
>;

export const deleteTaskDetailQueryKey = () => ["deleteTaskDetail"];

export const UseDeleteTaskDetail = (props?: UseDeleteTaskDetailProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteTaskDetailResponseTransformed>,
    ApiError,
    DeleteTaskDetailRequest
  >({
    mutationKey: deleteTaskDetailQueryKey(),
    mutationFn: (data) => deleteTaskDetail(data),
    ...props,
  });

  return mutation;
};
