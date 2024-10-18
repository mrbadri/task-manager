import {
  ApiError,
  ApiResponse,
  UseQueryProps,
  WithParams,
} from "@repo/apis/types/api.types";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./get-users";
import {
  GetUsersRequest,
  GetUsersResponseTransformed,
} from "./get-users.types";

export type UseGetUsersProps = UseQueryProps<
  ApiResponse<GetUsersResponseTransformed>,
  WithParams<GetUsersRequest>
>;

export const getUsersQueryKey = () => ["getUsers"];

export const UseGetUsers = (props: UseGetUsersProps) => {
  const { params, ...resProps } = props;

  const query = useQuery<ApiResponse<GetUsersResponseTransformed>, ApiError>({
  queryKey: getUsersQueryKey(),
  queryFn: () => getUsers(params),
    ...resProps,
  });

  return query;
};
