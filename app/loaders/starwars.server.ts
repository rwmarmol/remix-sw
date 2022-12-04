/**
 * Utils
 */
import { getEnvConfig } from "~/utils/config/index.server";
 
export class StarWarsApi {
  static swapiUrl = getEnvConfig("backend.swapiUrl");

  static async getCharacters() {
    return fetch(`${this.swapiUrl}/people`)
      .then(res => res.json())
      .then(data => data)
      .catch(err => console.error(err))
  }
}
 