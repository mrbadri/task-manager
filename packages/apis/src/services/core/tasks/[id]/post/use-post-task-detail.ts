import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postTaskDetail } from "./post-task-detail";
import {} from "./post-task-detail.schema";
import {
  PostTaskDetailRequest,
  PostTaskDetailResponseTransformed,
} from "./post-task-detail.types";

export type UsePostTaskDetailProps = UseMutationProps<
  ApiResponse<PostTaskDetailResponseTransformed>,
  ApiError,
  PostTaskDetailRequest
>;

export const postTaskDetailQueryKey = () => ["postTaskDetail"];

export const UsePostTaskDetail = (props?: UsePostTaskDetailProps) => {
  const mutation = useMutation<
    ApiResponse<PostTaskDetailResponseTransformed>,
    ApiError,
    PostTaskDetailRequest
  >({
    mutationKey: postTaskDetailQueryKey(),
    mutationFn: (data) => postTaskDetail(data),
    ...props,
  });

  return mutation;
};
