import { useEffect, useState } from "react";
import type { StarWarsFilm } from "~/interfaces/starwars/film";
/**
 * Utils
 */
 import { getVehicle } from "~/utils/starwars/utils";


interface CharacterCardProps {
  name: string;
  gender: string;
  height: string | number;
  mass: string | number;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  vehicles: string[];
  starships: string[];
  className?: string;
  films: StarWarsFilm[];
  onClick?: Function;
}

export default function CharacterCard({
  name, gender, height, mass, eye_color, hair_color,
  skin_color, className, onClick, films, vehicles, starships
  }: CharacterCardProps): JSX.Element {

  const [mainVehicle, setMainVehicle] = useState<Record<string, any> | null>(null);
  const [mainStarship, setMainStarship] = useState<Record<string, any> | null>(null);

  const handleOnClick = () => {
    if (onClick) onClick();
  }
  
  useEffect(() => {
    if (vehicles.length) {
      getVehicle(vehicles[0])
        .then(data => setMainVehicle(data))
    }
  }, [vehicles])

  useEffect(() => {
    if (starships.length) {
      getVehicle(starships[0])
        .then(data => setMainStarship(data))
    }
  }, [starships])


  return (
    <div className={`character-card ${className || ''}`} onClick={handleOnClick}>
      {true && <img className="character-card-thumbnail" src="/images/default-profile.jpg" alt={`${name}`} />}

      <div className="character-card-main">
        <h4 className="character-card-main__name">{ name }</h4>
        <p className="character-card-main__description">
          { gender && <span><label>Gender</label> {gender} </span> }
          { height && <span><label>Height</label> {height} </span> }
          { mass && <span><label>Mass</label> {mass} </span> }
        </p>
      </div>

      <div className="character-card-data">
        <p>
          Additional data<br />
          { eye_color && <span><label>Eye Color</label> {eye_color} </span> }
          { hair_color && <span><label>Hair Color</label> {hair_color} </span> }
          { skin_color && <span><label>Skin Color</label> {skin_color} </span> }
          { mainStarship && <span><label>Starship Model</label> {mainStarship.name} - {mainStarship.manufacturer} </span> }
          { mainVehicle && <span><label>Vehicle Model</label> {mainVehicle.name} - {mainVehicle.manufacturer} </span> }
        </p>

        {films.length && <p>
          {films.map((film: StarWarsFilm, index) => (
            <span className="text" key={film.title}>{film.title} {index == films.length - 1 ? '' : '-'} </span>
          ))}
        </p>}
      </div>
    </div>
  );
};
