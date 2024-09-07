import { useQuery } from "@tanstack/react-query";
import getAuthLocal, { AuthLocalProps } from "./getAuthLocal";
import { UseQueryProps, WithParams } from "@repo/ui/types/api.types";
import { getAuthLocalResponseSchema } from "./getAuthLocal.schema";

const getAuthLocalQueryKey = () => ["getAuthLocal"];

const UseGetAuthLocal = (props: UseQueryProps<WithParams<AuthLocalProps>>) => {
  const { params, ...resProps } = props;
  const query = useQuery({
    queryKey: getAuthLocalQueryKey(),
    queryFn: () => getAuthLocal(params),
    ...resProps,
  });

  const parsed = getAuthLocalResponseSchema.safeParse(query.data);
  if (!parsed.success) {
    throw new Error("Response data validation failed");
  }

  return query;
};
export default UseGetAuthLocal;
