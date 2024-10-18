import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { putBoards } from "./put-boards";
import {} from "./put-boards.schema";
import {
  PutBoardsRequest,
  PutBoardsResponseTransformed,
} from "./put-boards.types";

export type UsePutBoardsProps = UseMutationProps<
  ApiResponse<PutBoardsResponseTransformed>,
  ApiError,
  PutBoardsRequest
>;

export const putBoardsQueryKey = () => ["putBoards"];

export const UsePutBoards = (props?: UsePutBoardsProps) => {
  const mutation = useMutation<
    ApiResponse<PutBoardsResponseTransformed>,
    ApiError,
    PutBoardsRequest
  >({
    mutationKey: putBoardsQueryKey(),
    mutationFn: (data) => putBoards(data),
    ...props,
  });

  return mutation;
};
