import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./get-tasks";
import {
  GetTasksRequest,
  GetTasksResponseTransformed,
} from "./get-tasks.types";

export type UseGetTasksProps = UseQueryProps<
  ApiResponse<GetTasksResponseTransformed>,
  WithParams<GetTasksRequest>
>;

export const getTasksQueryKey = () => ["getTasks"];

export const UseGetTasks = (props: UseGetTasksProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<ApiResponse<GetTasksResponseTransformed>, ApiError>({
  queryKey: getTasksQueryKey(),
  queryFn: () => getTasks(params),
    ...resProps,
  });

  return query;
};
