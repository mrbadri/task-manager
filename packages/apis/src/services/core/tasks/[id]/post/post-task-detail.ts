import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postTaskDetailSchema as schema } from "./post-task-detail.schema";
import {
  PostTaskDetailRequest,
  PostTaskDetailResponseTransformed,
} from "./post-task-detail.types";

export const postTaskDetailURL = () => path.join("/api/tasks/detail");

export const postTaskDetail = async (
  props?: PostTaskDetailRequest,
): Promise<ApiResponse<PostTaskDetailResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postTaskDetailURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
