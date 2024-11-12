
import useSWR from "swr";

export const blogsFetcher = (url: string) => fetch(url).then((res) => res.json());

export const useSwrHook = useSWR