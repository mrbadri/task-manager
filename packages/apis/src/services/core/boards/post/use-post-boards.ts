import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { postBoards } from "./post-boards";
import {} from "./post-boards.schema";
import {
  PostBoardsRequest,
  PostBoardsResponseTransformed,
} from "./post-boards.types";

export type UsePostBoardsProps = UseMutationProps<
  ApiResponse<PostBoardsResponseTransformed>,
  ApiError,
  PostBoardsRequest
>;

export const postBoardsQueryKey = () => ["postBoards"];

export const UsePostBoards = (props?: UsePostBoardsProps) => {
  const mutation = useMutation<
    ApiResponse<PostBoardsResponseTransformed>,
    ApiError,
    PostBoardsRequest
  >({
    mutationKey: postBoardsQueryKey(),
    mutationFn: (data) => postBoards(data),
    ...props,
  });

  return mutation;
};
