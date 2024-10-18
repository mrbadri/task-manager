import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getBoards } from "./get-boards";
import {
  GetBoardsRequest,
  GetBoardsResponseTransformed,
} from "./get-boards.types";

export type UseGetBoardsProps = UseQueryProps<
  ApiResponse<GetBoardsResponseTransformed>,
  WithParams<GetBoardsRequest>
>;

export const getBoardsQueryKey = () => ["getBoards"];

export const UseGetBoards = (props: UseGetBoardsProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<ApiResponse<GetBoardsResponseTransformed>, ApiError>({
  queryKey: getBoardsQueryKey(),
  queryFn: () => getBoards(params),
    ...resProps,
  });

  return query;
};
