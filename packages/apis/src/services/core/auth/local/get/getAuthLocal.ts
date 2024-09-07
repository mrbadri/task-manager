import requestHandler from "@repo/ui/utils/request-handler";
import axios from "axios";
import { z } from "zod";
import {
  getAuthLocalRequestSchema,
  getAuthLocalResponseSchema,
} from "./getAuthLocal.schema";

export type AuthLocalReturn = z.infer<typeof getAuthLocalResponseSchema>;

export type AuthLocalProps = z.infer<typeof getAuthLocalRequestSchema>;

const getAuthLocal = async (props: AuthLocalProps) => {
  return requestHandler(
    () => axios.get<AuthLocalReturn>("/api/auth/local", { params: props }),
    getAuthLocalResponseSchema,
  );
};

export default getAuthLocal;
