import { useQuery } from "@tanstack/react-query";
import postAuthLocal, { AuthLocalProps } from "./postAuthLocal";
import { UseQueryProps, WithParams } from "@repo/ui/types/api.types";
import { AuthLocalResponseSchema } from "./postAuthLocal.schema";

const postAuthLocalQueryKey = () => ["postAuthLocal"];

const UseGetAuthLocal = (props: UseQueryProps<WithParams<AuthLocalProps>>) => {
  const { params, ...resProps } = props;
  const query = useQuery({
    queryKey: postAuthLocalQueryKey(),
    queryFn: () => postAuthLocal(params),
    ...resProps,
  });

  const parsed = AuthLocalResponseSchema.safeParse(query.data);
  if (!parsed.success) {
    throw new Error("Response data validation failed");
  }

  return query;
};
export default UseGetAuthLocal;
