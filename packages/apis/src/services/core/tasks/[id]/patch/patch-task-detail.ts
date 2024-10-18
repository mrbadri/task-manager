import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { patchTaskDetailSchema as schema } from "./patch-task-detail.schema";
import {
  PatchTaskDetailRequest,
  PatchTaskDetailResponseTransformed,
} from "./patch-task-detail.types";

export const patchTaskDetailURL = () => path.join("/api/tasks/detail");

export const patchTaskDetail = async (
  props?: PatchTaskDetailRequest,
): Promise<ApiResponse<PatchTaskDetailResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = patchTaskDetailURL();

  const response = await requestHandler(
    () => coreApi.patch(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
