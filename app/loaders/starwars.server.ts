/**
 * Utils
 */
import { getEnvConfig } from "~/utils/config/index.server";
import type { SwapiResponse } from "~/interfaces/starwars/swapi";

export class StarWarsApi {
  static swapiUrl = getEnvConfig("backend.swapiUrl");

  static async baseGet(url: string) {
    return fetch(url)
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.error(err))
  }

  static async getCharacters(page?:string | number | null) {
    return fetch(`${this.swapiUrl}/people?page=${page}`)
      .then(res => res.json())
      .then((data: SwapiResponse) => data)
      .catch(err => console.error(err))
  }

  static async getFilms() {
    return fetch(`${this.swapiUrl}/films`)
      .then(res => res.json())
      .then((data: SwapiResponse) => data)
      .catch(err => console.error(err))
  }

  static async getStarships() {
    return fetch(`${this.swapiUrl}/starships`)
      .then(res => res.json())
      .then((data: SwapiResponse) => data)
      .catch(err => console.error(err))
  }

  static async getVehicles() {
    return fetch(`${this.swapiUrl}/vehicles`)
      .then(res => res.json())
      .then((data: SwapiResponse) => data)
      .catch(err => console.error(err))
  }

  static async getSpecies() {
    return fetch(`${this.swapiUrl}/species`)
      .then(res => res.json())
      .then((data: SwapiResponse) => data)
      .catch(err => console.error(err))
  }

  static async getPlanets() {
    return fetch(`${this.swapiUrl}/planets`)
      .then(res => res.json())
      .then((data: SwapiResponse) => data)
      .catch(err => console.error(err))
  }
}
 