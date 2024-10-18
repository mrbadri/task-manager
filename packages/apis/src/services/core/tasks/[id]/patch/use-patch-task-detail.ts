import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { patchTaskDetail } from "./patch-task-detail";
import {} from "./patch-task-detail.schema";
import {
  PatchTaskDetailRequest,
  PatchTaskDetailResponseTransformed,
} from "./patch-task-detail.types";

export type UsePatchTaskDetailProps = UseMutationProps<
  ApiResponse<PatchTaskDetailResponseTransformed>,
  ApiError,
  PatchTaskDetailRequest
>;

export const patchTaskDetailQueryKey = () => ["patchTaskDetail"];

export const UsePatchTaskDetail = (props?: UsePatchTaskDetailProps) => {
  const mutation = useMutation<
    ApiResponse<PatchTaskDetailResponseTransformed>,
    ApiError,
    PatchTaskDetailRequest
  >({
    mutationKey: patchTaskDetailQueryKey(),
    mutationFn: (data) => patchTaskDetail(data),
    ...props,
  });

  return mutation;
};
