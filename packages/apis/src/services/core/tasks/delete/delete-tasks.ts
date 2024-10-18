import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { deleteTasksSchema as schema } from "./delete-tasks.schema";
import {
  DeleteTasksRequest,
  DeleteTasksResponseTransformed,
} from "./delete-tasks.types";

export const deleteTasksURL = () => path.join("/api/tasks");

export const deleteTasks = async (
  props?: DeleteTasksRequest,
): Promise<ApiResponse<DeleteTasksResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteTasksURL();

  const response = await requestHandler(
    () => coreApi.delete(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
