
/**
 * Star Wars Characters Interface
 * 
 * @attr mass expressed in Kilograms
 * @attr height expressed in centimeters
 * @attr gender -- The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
 * @attr eye_color -- The eye color of this person. Will be "unknown" if not known or "n/a" if the person does not have an eye.
 * @attr hair_color -- The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
 * @attr birthYear -- The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin). 
 * 
 */

export interface StarWarsCharacter {
  name: string;
  starships: string[];
  url: string;
  birthYear: string;
  gender: string;
  species: string[];
  vehicles: string[];
  height: string | number;
  mass: string | number;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  films: string[];
  homeworld: string;
  edited: string | Date;
  created: string | Date;
}