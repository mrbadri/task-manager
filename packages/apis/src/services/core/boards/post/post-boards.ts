import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { postBoardsSchema as schema } from "./post-boards.schema";
import {
  PostBoardsRequest,
  PostBoardsResponseTransformed,
} from "./post-boards.types";

export const postBoardsURL = () => path.join("/api/boards");

export const postBoards = async (
  props?: PostBoardsRequest,
): Promise<ApiResponse<PostBoardsResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = postBoardsURL();

  const response = await requestHandler(
    () => coreApi.post(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
