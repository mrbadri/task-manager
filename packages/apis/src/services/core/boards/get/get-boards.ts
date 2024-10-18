import { coreApi } from "#instance/core-api"; 
import path from "path";
import { ApiResponse } from "@repo/apis/types/api.types";
import { requestHandler } from "@repo/apis/utils/request-handler";
import { getBoardsSchema as schema } from "./get-boards.schema";
import {
  GetBoardsRequest,
  GetBoardsResponse,
  GetBoardsResponseTransformed,
} from "./get-boards.types";

const getBoardsURL = () => path.join("/api/boards");

export const getBoards = async (
  props: GetBoardsRequest,
): Promise<ApiResponse<GetBoardsResponseTransformed>> => {
  const payloadParsed = schema.request.parse(props);
  const URL = getBoardsURL();

  const response = await requestHandler(
    () => coreApi.get<GetBoardsResponse>(URL, { params: payloadParsed }),
    schema.response._def.schema,
    {
      isMock: true,
    },
  );

  const dataParsed = schema.response.parse(response.data);

  return { ...response, data: dataParsed };
};
