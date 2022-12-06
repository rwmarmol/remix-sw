
/**
 * Star Wars Species Interface
 * 
 * @attr classification -- The classification of this species, such as "mammal" or "reptile".
 * @attr designation -- The designation of this species, such as "sentient".
 * @attr eyeColors -- A comma-separated string of common eye colors for this species, "none" if this species does not typically have eyes.
 * @attr skinColors -- A comma-separated string of common skin colors for this species, "none" if this species does not typically have skin.
 * @attr hairColor -- A comma-separated string of common hair colors for this species, "none" if this species does not typically have hair.
 * 
 */

 export interface StarWarsSpecies {
  name: string;
  classification: string;
  designation: string;
  averageHeight: string | number;
  averageLifespan: string | number;
  eyeColors: string;
  hairColors: string;
  skinColors: string;
  language: string;
  homeworld: string;
  url: string;
  films: string[];
  people: string[];
  edited: string | Date;
  created: string | Date;
}