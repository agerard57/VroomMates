export interface UserInputs {
  _id: string;
  name: { first_name: string; last_name: string };
  email: { email_address: string };
  password: string;
  address: {
    house_number: number;
    street_name: string;
    city: string;
    state: string;
    zip: number;
    country: string;
  };
  photo_url: string;
  about: {
    hobbies: string[];
    bio: string;
    chatty: boolean;
    music: boolean;
    animals_tolerated: boolean;
  };
  birth_date: Date;
}

export const UserInputsInitializer: UserInputs = {
  _id: "",
  name: { first_name: "", last_name: "" },
  email: { email_address: "" },
  password: "",
  address: {
    house_number: 0,
    street_name: "",
    city: "",
    state: "",
    zip: 0,
    country: "",
  },
  photo_url: "",
  about: {
    hobbies: [""],
    bio: "",
    chatty: true,
    music: true,
    animals_tolerated: true,
  },
  birth_date: new Date(),
};
