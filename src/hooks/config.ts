import useSWR from "swr";

interface t {
  api_url: string;
}

export function useApplicationConfig() {
  const { data, error } = useSWR<t, Error>("/application.json", (url) =>
    fetch(url, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json())
  );

  return { config: data, error };
}
