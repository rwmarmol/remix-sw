import type { StarWarsFilm } from "~/interfaces/starwars/film";

export const getFilmsByCharacter = (characterUrl: string, films: StarWarsFilm[]): any[] => {
  return films.filter(film => film.characters.includes(characterUrl));
}

export const getVehicle = async (vehicleUrl: string) => {
  const localApiPrefix = (window as any).__envConfig.localApiPrefix;
  const params = new URLSearchParams();
  params.append('targetUrl', vehicleUrl);

  return fetch(`${localApiPrefix}/starwars/api/?` + params)
    .then(res => res.json())
    .then(data => data)

}