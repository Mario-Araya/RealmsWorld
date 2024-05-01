import type { UsersRealmsQuery } from "@/.graphclient";
import { useQuery } from "@tanstack/react-query";

export const useLordship = (address?: string) => {
  return useQuery({
    queryKey: ["Lordship" + address],
    queryFn: async () =>
      await fetch(`/api/subgraph/getTokenHolders?address=${address}`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => {
          return res.data;
        }),
    enabled: !!address,
    //refetchInterval: 10000,
  });
};