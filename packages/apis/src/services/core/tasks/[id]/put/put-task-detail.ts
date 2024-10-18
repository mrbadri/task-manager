import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { putTaskDetailSchema as schema } from "./put-task-detail.schema";
import {
  PutTaskDetailRequest,
  PutTaskDetailResponseTransformed,
} from "./put-task-detail.types";

export const putTaskDetailURL = () => path.join("/api/tasks/detail");

export const putTaskDetail = async (
  props?: PutTaskDetailRequest,
): Promise<ApiResponse<PutTaskDetailResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = putTaskDetailURL();

  const response = await requestHandler(
    () => coreApi.put(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
