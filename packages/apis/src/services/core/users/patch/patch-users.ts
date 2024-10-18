import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { patchUsersSchema as schema } from "./patch-users.schema";
import {
  PatchUsersRequest,
  PatchUsersResponseTransformed,
} from "./patch-users.types";

export const patchUsersURL = () => path.join("/api/users");

export const patchUsers = async (
  props?: PatchUsersRequest,
): Promise<ApiResponse<PatchUsersResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = patchUsersURL();

  const response = await requestHandler(
    () => coreApi.patch(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
