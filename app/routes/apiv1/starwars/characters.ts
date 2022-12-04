import type { LoaderFunction } from "@remix-run/node";
import { StarWarsApi } from "~/loaders/starwars.server";

export const loader: LoaderFunction = async ({ request }) => {
  // const url = new URL(request.url);

  if (false) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  return StarWarsApi.getCharacters()
};
