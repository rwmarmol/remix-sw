/**
 * Star Wars Planet Interface
 * 
 * @attr diameter -- The diameter of this planet in kilometers.
 * @attr rotationPeriod -- The number of standard hours it takes for this planet to complete a single rotation on its axis.
 * @attr orbitalPeriod -- The number of standard days it takes for this planet to complete a single orbit of its local star.
 * @attr gravity -- A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
 * @attr climate -- The climate of this planet. Comma separated if diverse.
 * @attr terrain -- The terrain of this planet. Comma separated if diverse.
 * @attr surfaceWater -- The percentage of the planet surface that is naturally occurring water or bodies of water.
 * 
 */

export interface Planet {
  name: string;
  diameter: string;
  rotationPeriod: string | number;
  orbitalPeriod: string | number;
  gravity: string | number;
  population: string | number;
  climate: string;
  terrain: string;
  surfaceWater: string | number;
  residents: string[];
  films: string[];
  url: string[];
  created: string | Date;
  edited: string | Date;
}