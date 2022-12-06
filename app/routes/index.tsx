/**
 * Remix & React
 */
import { json } from "@remix-run/node";
import { useLoaderData, useTransition } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

/**
 * Server
 */
import { StarWarsApi } from "~/loaders/starwars.server";

/**
 * Utils and interfaces
 */
import { useConfigContext } from "~/utils/config/context";
import type { SwapiResponse } from "~/interfaces/starwars/swapi";
import type { StarWarsCharacter  } from "~/interfaces/starwars/character";
import type { StarWarsFilm } from "~/interfaces/starwars/film";

/**
 * Components
 */
import CharacterCardContainer from "~/components/character-card-container";
import Hero from "~/components/hero";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const page = (url.searchParams.get("page")) ? url.searchParams.get("page") : 1;

  const [ characters, films ] = await Promise.all([
    StarWarsApi.getCharacters(page),
    StarWarsApi.getFilms(),
  ]);
  return json({
    characters: characters,
    films: films?.results,
  })
}

interface LoaderData {
  characters: SwapiResponse;
  films: StarWarsFilm[];
}


export default function Index() {

  const config = useConfigContext();
  const { characters, films } = useLoaderData() as LoaderData;

  const transition = useTransition();
  const isLoading = transition.state !== "idle";

  return (
    <div className="main-container" style={{ fontFamily: "Kanit, sans-serif", lineHeight: "1.4" }}>

      <Hero
        logoUrl={config.siteConfig.logoUrl}
        title="Star Wars Characters directory"
        pretitle="May the force be with you"
        description="Characters directory from 'swapi' Star Wars API"
      />


      <CharacterCardContainer
        characters={characters?.results as StarWarsCharacter[]}
        films={films}
        nextPage={characters?.next}
        previousPage={characters?.previous}
        count={characters.count}
        isLoading={isLoading}
      />
    </div>
  );
}
