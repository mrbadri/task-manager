import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { putUsersSchema as schema } from "./put-users.schema";
import {
  PutUsersRequest,
  PutUsersResponseTransformed,
} from "./put-users.types";

export const putUsersURL = () => path.join("/api/users");

export const putUsers = async (
  props?: PutUsersRequest,
): Promise<ApiResponse<PutUsersResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = putUsersURL();

  const response = await requestHandler(
    () => coreApi.put(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
