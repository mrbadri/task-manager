import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getTaskDetail } from "./get-task-detail";
import {
  GetTaskDetailRequest,
  GetTaskDetailResponseTransformed,
} from "./get-task-detail.types";

export type UseGetTaskDetailProps = UseQueryProps<
  ApiResponse<GetTaskDetailResponseTransformed>,
  WithParams<GetTaskDetailRequest>
>;

export const getTaskDetailQueryKey = () => ["getTaskDetail"];

export const UseGetTaskDetail = (props: UseGetTaskDetailProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<ApiResponse<GetTaskDetailResponseTransformed>, ApiError>({
  queryKey: getTaskDetailQueryKey(),
  queryFn: () => getTaskDetail(params),
    ...resProps,
  });

  return query;
};
