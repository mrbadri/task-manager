import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { deleteBoardsSchema as schema } from "./delete-boards.schema";
import {
  DeleteBoardsRequest,
  DeleteBoardsResponseTransformed,
} from "./delete-boards.types";

export const deleteBoardsURL = () => path.join("/api/boards");

export const deleteBoards = async (
  props?: DeleteBoardsRequest,
): Promise<ApiResponse<DeleteBoardsResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = deleteBoardsURL();

  const response = await requestHandler(
    () => coreApi.delete(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
