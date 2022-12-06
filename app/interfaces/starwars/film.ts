/**
 * Star Wars Films Interface
 * 
 * @attr openingCrawl -- The opening paragraphs at the beginning of this film.
 * @attr director -- The name(s) of the producer(s) of this film. Comma separated.
 * 
 */

export interface StarWarsFilm {
  title: string;
  episodeId: number;
  openingCrawl: string;
  director: string; 
  producer: string;
  releaseDate: string | Date;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string | Date;
  edited: string | Date;
}