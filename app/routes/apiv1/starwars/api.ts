import type { LoaderFunction } from "@remix-run/node";
import { StarWarsApi } from "~/loaders/starwars.server";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get("targetUrl");

  if (!targetUrl) return

  return StarWarsApi.baseGet(targetUrl)
};
