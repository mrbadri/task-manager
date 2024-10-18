import { coreApi } from "#instance/core-api"; 
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import path from "path";
import { patchBoardsSchema as schema } from "./patch-boards.schema";
import {
  PatchBoardsRequest,
  PatchBoardsResponseTransformed,
} from "./patch-boards.types";

export const patchBoardsURL = () => path.join("/api/boards");

export const patchBoards = async (
  props?: PatchBoardsRequest,
): Promise<ApiResponse<PatchBoardsResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);

  const URL = patchBoardsURL();

  const response = await requestHandler(
    () => coreApi.patch(URL, payloadParsed),
    schema.response._def.schema,
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
