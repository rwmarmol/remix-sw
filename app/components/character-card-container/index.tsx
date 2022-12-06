/**
 * React & Remix
 */
import { useNavigate } from "@remix-run/react";

/**
 * Interfaces
 */
 import type { StarWarsCharacter } from "~/interfaces/starwars/character";
 import type { StarWarsFilm } from "~/interfaces/starwars/film";

/**
 * Components
 */
import CharacterCard from "~/components/character-card";
import Loading from "~/components/loading";
import Button from "~/components/button";

/**
 * Utils
 */
import { getFilmsByCharacter } from "~/utils/starwars/utils";

interface CharacterCardContainerProps {
  characters: StarWarsCharacter[];
  films: StarWarsFilm[]
  nextPage: string | null;
  previousPage: string | null;
  count: number;
  isLoading: boolean;
  className?: string;
}

export default function CharacterCardContainer({
    characters, films, className, count, nextPage, previousPage, isLoading
  }: CharacterCardContainerProps): JSX.Element {

  const navigate = useNavigate()

  const navigatePage = (pageUrl: string): void => {
    const page = pageUrl.split('?')[1]
    navigate(`/?${page}`)
  }

  return (
    <div className={`character-card-container ${className || ''}`}>
      { isLoading && <Loading />}
      {characters?.length &&
      <>
        <p className="character-card-container__count">
          Showing: <span className="character-card-container__count--number">{characters?.length}</span> - Total characters: <span className="character-card-container__count--number">{count}</span>
        </p>
        <div className="character-card-container__cards">
        {characters.map((character: StarWarsCharacter) => (
          <CharacterCard key={character.name} {...character} films={getFilmsByCharacter(character.url, films)}/>
        ))}
        </div>
        <div className="character-card-container__button-row">
          {nextPage && <Button type="outline" buttonText="Next Page" onClick={() => navigatePage(nextPage)} /> }
          {previousPage && <Button type="link" buttonText="Previous" onClick={() => navigatePage(previousPage)} /> }
        </div>
      </>
      }

      {!characters?.length &&
        <div className="character-card-container--no-results">
          <img className="character-card-container--no-results__icon" src="/images/death-star.png" alt="death-star"/>
          <h2 className="character-card-container--no-results__title">It's a trap!</h2>
          <p className="character-card-container--no-results__message">Sorry, but there is no data to display</p>
        </div>
      }

    </div>
  );
};
