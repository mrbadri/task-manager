import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { deleteTaskDetailSchema as schema } from "./delete-task-detail.schema";
import {
  DeleteTaskDetailRequest,
  DeleteTaskDetailResponseTransformed,
} from "./delete-task-detail.types";

export const deleteTaskDetailURL = () => path.join("/api/tasks/detail");

export const deleteTaskDetail = async (
  props?: DeleteTaskDetailRequest,
): Promise<ApiResponse<DeleteTaskDetailResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteTaskDetailURL();

  const response = await requestHandler(
    () => coreApi.delete(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
