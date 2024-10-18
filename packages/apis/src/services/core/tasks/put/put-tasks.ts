import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { putTasksSchema as schema } from "./put-tasks.schema";
import {
  PutTasksRequest,
  PutTasksResponseTransformed,
} from "./put-tasks.types";

export const putTasksURL = () => path.join("/api/tasks");

export const putTasks = async (
  props?: PutTasksRequest,
): Promise<ApiResponse<PutTasksResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = putTasksURL();

  const response = await requestHandler(
    () => coreApi.put(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
