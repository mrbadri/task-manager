import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { patchTasksSchema as schema } from "./patch-tasks.schema";
import {
  PatchTasksRequest,
  PatchTasksResponseTransformed,
} from "./patch-tasks.types";

export const patchTasksURL = () => path.join("/api/tasks");

export const patchTasks = async (
  props?: PatchTasksRequest,
): Promise<ApiResponse<PatchTasksResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = patchTasksURL();

  const response = await requestHandler(
    () => coreApi.patch(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
