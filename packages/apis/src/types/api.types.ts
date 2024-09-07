import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export type ApiResponse<T = any, D = any> = AxiosResponse<T, D>;

export type WithParams<P = unknown | undefined> = { params: P };
export type UseQueryProps<T extends WithParams = WithParams> = Omit<
  UseQueryOptions,
  "queryKey"
> &
  T;
