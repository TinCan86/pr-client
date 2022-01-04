import useSWR from "swr";

interface t {
  api_url: string;
}

export function useApplicationConfig() {
  const { data, error } = useSWR<t, Error>("/application.json", (url) =>
    fetch(url).then((r) => r.json())
  );

  return { config: data, error };
}
