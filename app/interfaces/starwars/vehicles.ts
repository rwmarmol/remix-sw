/**
 * Star Wars Base Vehicle Interface
 * 
 * @attr costInCredits -- The cost of this starship **new**, in galactic credits.
 * @attr length -- The length of this starship in meters.
 * @attr crew -- The number of personnel needed to run or pilot this starship.
 * @attr passengers -- The number of non-essential people this starship can transport.
 * @attr maxAtmospheringSpeed -- The maximum speed of this starship in the atmosphere. "N/A" if this starship is incapable of atmospheric flight.
 * @attr consumables -- The maximum length of time that this starship can provide consumables for its entire crew without having to resupply.
 */
interface BaseVehicle {
  name: string;
  model: string;
  passengers: string;
  maxAtmospheringSpeed: string;
  cargoCapacity: string;
  costInCredits: string;
  manufacturer: string;
  length: string | number;
  pilots: string[];
  crew: string | number;
  films: string[];
  url: string;
  created: string | Date;
  edited: string | Date;
  consumables: string;
}

/**
 * Star Wars Starship Interface
 * 
 * @attr starshipClass -- The class of this starship, such as "Starfighter" or "Deep Space Mobile Battlestation"
 * @attr MGLT -- The Maximum number of Megalights this starship can travel in a standard hour. A "Megalight" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth.
 * @attr hyperdriveRating -- The class of this starships hyperdrive.
 * 
 */
export interface StarWarsStarship extends BaseVehicle {
  starshipClass: string;
  hyperdriveRating: string;
  MGLT: string;
}

/**
 * Star Wars Vehicle Interface
 * 
 * @attr vehicle_class -- The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
 * 
 */
export interface StarWarsVehicle extends BaseVehicle {
  vehicle_class: string 
}
