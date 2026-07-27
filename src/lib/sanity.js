import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "m8ma410x",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
