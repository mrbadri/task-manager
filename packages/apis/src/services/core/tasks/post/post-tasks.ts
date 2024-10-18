import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postTasksSchema as schema } from "./post-tasks.schema";
import {
  PostTasksRequest,
  PostTasksResponseTransformed,
} from "./post-tasks.types";

export const postTasksURL = () => path.join("/api/tasks");

export const postTasks = async (
  props?: PostTasksRequest,
): Promise<ApiResponse<PostTasksResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postTasksURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
