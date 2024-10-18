import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { deleteUsersSchema as schema } from "./delete-users.schema";
import {
  DeleteUsersRequest,
  DeleteUsersResponseTransformed,
} from "./delete-users.types";

export const deleteUsersURL = () => path.join("/api/users");

export const deleteUsers = async (
  props?: DeleteUsersRequest,
): Promise<ApiResponse<DeleteUsersResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteUsersURL();

  const response = await requestHandler(
    () => coreApi.delete(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
