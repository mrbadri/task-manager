import requestHandler from "@repo/ui/utils/request-handler";
import axios from "axios";
import { z } from "zod";
import {
  AuthLocalRequestSchema,
  AuthLocalResponseSchema,
} from "./postAuthLocal.schema";

export type AuthLocalReturn = z.infer<typeof AuthLocalResponseSchema>;

export type AuthLocalProps = z.infer<typeof AuthLocalRequestSchema>;

const postAuthLocal = async (props: AuthLocalProps) => {
  return requestHandler(
    () => axios.post<AuthLocalReturn>("/api/auth/local", { params: props }),
    AuthLocalResponseSchema,
  );
};

export default postAuthLocal;
