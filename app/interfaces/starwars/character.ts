
/**
 * Star Wars Characters Interface
 * @attr mass expressed in Kilograms
 * @attr height expressed in centimeters
 * @attr eyeColor -- The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
 * @attr gender -- The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
 * @attr hairColor -- The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
 * @attr birthYear -- The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin). 
 * 
 */

export interface starWarsCharacter {
  name: string;
  starships: any[];
  url: string;
  birthYear: string;
  gender: string;
  species: any[];
  vehicles: any[];
  height: string | number;
  mass: string | number;
  eyeColor: string;
  hairColor: string;
  skinColor: string;
  films: any[];
  homeworld: string;
  edited: string | Date;
  created: string | Date;
}