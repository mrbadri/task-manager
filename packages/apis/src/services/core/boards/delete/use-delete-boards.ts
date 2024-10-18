import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { deleteBoards } from "./delete-boards";
import {} from "./delete-boards.schema";
import {
  DeleteBoardsRequest,
  DeleteBoardsResponseTransformed,
} from "./delete-boards.types";

export type UseDeleteBoardsProps = UseMutationProps<
  ApiResponse<DeleteBoardsResponseTransformed>,
  ApiError,
  DeleteBoardsRequest
>;

export const deleteBoardsQueryKey = () => ["deleteBoards"];

export const UseDeleteBoards = (props?: UseDeleteBoardsProps) => {
  const mutation = useMutation<
    ApiResponse<DeleteBoardsResponseTransformed>,
    ApiError,
    DeleteBoardsRequest
  >({
    mutationKey: deleteBoardsQueryKey(),
    mutationFn: (data) => deleteBoards(data),
    ...props,
  });

  return mutation;
};
