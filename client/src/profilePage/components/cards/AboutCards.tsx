import { FC } from "react";

import { User } from "../../interfaces";
import { BioCard } from "./BioCard";
import { CarCard } from "./CarCard";
import { HobbiesCard } from "./HobbiesCard";

type Props = {
  bio?: string;
  car?: User["car"];
  status: User["status"];
  hobbies?: string[];
};

export const AboutCards: FC<Props> = ({ bio, car, hobbies, status }) => (
  <>
    {bio && <BioCard bio={bio} />}
    {car && status === "driver" && (
      <CarCard brand={car.brand} model={car.model} color={car.color} />
    )}
    {hobbies && <HobbiesCard hobbies={hobbies} />}
  </>
);
