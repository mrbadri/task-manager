import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postUsersSchema as schema } from "./post-users.schema";
import {
  PostUsersRequest,
  PostUsersResponseTransformed,
} from "./post-users.types";

export const postUsersURL = () => path.join("/api/users");

export const postUsers = async (
  props?: PostUsersRequest,
): Promise<ApiResponse<PostUsersResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postUsersURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
