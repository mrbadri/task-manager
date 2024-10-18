import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { putTaskDetail } from "./put-task-detail";
import {} from "./put-task-detail.schema";
import {
  PutTaskDetailRequest,
  PutTaskDetailResponseTransformed,
} from "./put-task-detail.types";

export type UsePutTaskDetailProps = UseMutationProps<
  ApiResponse<PutTaskDetailResponseTransformed>,
  ApiError,
  PutTaskDetailRequest
>;

export const putTaskDetailQueryKey = () => ["putTaskDetail"];

export const UsePutTaskDetail = (props?: UsePutTaskDetailProps) => {
  const mutation = useMutation<
    ApiResponse<PutTaskDetailResponseTransformed>,
    ApiError,
    PutTaskDetailRequest
  >({
    mutationKey: putTaskDetailQueryKey(),
    mutationFn: (data) => putTaskDetail(data),
    ...props,
  });

  return mutation;
};
