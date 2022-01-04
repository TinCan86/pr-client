import useSWR from "swr";
import { useApplicationConfig } from "./config";

// Define type for data
import * as Model from "../models";

export function usePullrequestData() {
  const { config } = useApplicationConfig();

  const url = config != null ? `${config.api_url}` : null;

  // TODO: Define the respone data to a data model
  const { data, error, isValidating } = useSWR<any, Error>(url, {
    refreshInterval: 0, // Prevents the auto-revalidation
    revalidateOnFocus: false, // Prevents the auto-revalidation
    revalidateOnReconnect: false, // Prevents the auto-revalidation
  });

  if (error) {
    console.error(error);
  }

  return { data, error, isValidating };
}
