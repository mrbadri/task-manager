import { coreApi } from "#instance/core-api"; 
import path from "path";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { getUsersSchema as schema } from "./get-users.schema";
import {
  GetUsersRequest,
  GetUsersResponse,
  GetUsersResponseTransformed,
} from "./get-users.types";

const getUsersURL = () => path.join("/api/users");

export const getUsers = async (
  props: GetUsersRequest,
): Promise<ApiResponse<GetUsersResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getUsersURL();

  const response = await requestHandler(
    () => coreApi.get<GetUsersResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema,
    {
      isMock: true,
    },
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
