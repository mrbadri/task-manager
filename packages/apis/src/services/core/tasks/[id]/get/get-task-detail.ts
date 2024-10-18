import { coreApi } from "#instance/core-api"; 
import path from "path";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { getTaskDetailSchema as schema } from "./get-task-detail.schema";
import {
  GetTaskDetailRequest,
  GetTaskDetailResponse,
  GetTaskDetailResponseTransformed,
} from "./get-task-detail.types";

const getTaskDetailURL = () => path.join("/api/task-detail");

export const getTaskDetail = async (
  props: GetTaskDetailRequest,
): Promise<ApiResponse<GetTaskDetailResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getTaskDetailURL();

  const response = await requestHandler(
    () => coreApi.get<GetTaskDetailResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema,
    {
      isMock: true,
    },
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
