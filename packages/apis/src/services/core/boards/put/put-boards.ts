import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { putBoardsSchema as schema } from "./put-boards.schema";
import {
  PutBoardsRequest,
  PutBoardsResponseTransformed,
} from "./put-boards.types";

export const putBoardsURL = () => path.join("/api/boards");

export const putBoards = async (
  props?: PutBoardsRequest,
): Promise<ApiResponse<PutBoardsResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = putBoardsURL();

  const response = await requestHandler(
    () => coreApi.put(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
