import {
  ApiError,
  ApiResponse,
  UseMutationProps,
} from "@repo/apis/types/api.types";
import { useMutation } from "@tanstack/react-query";
import { patchBoards } from "./patch-boards";
import {} from "./patch-boards.schema";
import {
  PatchBoardsRequest,
  PatchBoardsResponseTransformed,
} from "./patch-boards.types";

export type UsePatchBoardsProps = UseMutationProps<
  ApiResponse<PatchBoardsResponseTransformed>,
  ApiError,
  PatchBoardsRequest
>;

export const patchBoardsQueryKey = () => ["patchBoards"];

export const UsePatchBoards = (props?: UsePatchBoardsProps) => {
  const mutation = useMutation<
    ApiResponse<PatchBoardsResponseTransformed>,
    ApiError,
    PatchBoardsRequest
  >({
    mutationKey: patchBoardsQueryKey(),
    mutationFn: (data) => patchBoards(data),
    ...props,
  });

  return mutation;
};
