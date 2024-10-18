import { coreApi } from "#instance/core-api"; 
import path from "path";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { getTasksSchema as schema } from "./get-tasks.schema";
import {
  GetTasksRequest,
  GetTasksResponse,
  GetTasksResponseTransformed,
} from "./get-tasks.types";

const getTasksURL = () => path.join("/api/tasks");

export const getTasks = async (
  props: GetTasksRequest,
): Promise<ApiResponse<GetTasksResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getTasksURL();

  const response = await requestHandler(
    () => coreApi.get<GetTasksResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema,
    {
      isMock: true,
    },
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
