/**
 * Swapi API Response
 * https://swapi.py4e.com/documentation
 * 
 */
export interface SwapiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: any[];
}