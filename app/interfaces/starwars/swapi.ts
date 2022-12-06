/**
 * Swapi API Response
 * https://swapi.dev/documentation
 * 
 */
export interface SwapiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
}