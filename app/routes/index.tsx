/**
 * Remix & React
 */
import { useEffect } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

/**
 * Server
 */
import { StarWarsApi } from "~/loaders/starwars.server";

/**
 * Utils and interfaces
 */
import { useConfigContext } from "~/utils/config/context";

export const loader: LoaderFunction = async ({ request, params }) => {
  const [ characters ] = await Promise.all([
    StarWarsApi.getCharacters()
  ]);
  return json({
    characters,
  })
}

interface LoaderData {
  characters: any
}


export default function Index() {

  const config = useConfigContext();
  const { characters } = useLoaderData() as LoaderData;

  useEffect(() => {
    console.log(characters)
  })

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix {config.localApiPrefix}</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
