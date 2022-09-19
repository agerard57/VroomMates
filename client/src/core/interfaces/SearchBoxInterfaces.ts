type Type = "single" | "frequent" | "";

export interface SearchBoxInterfaces {
  SearchInputs: {
    type: Type;
    departureLocation: string;
    arrivalLocation: string;
    date: string;
  };
}

export const SearchBoxInitializers: SearchBoxInterfaces = {
  SearchInputs: {
    type: "",
    departureLocation: "",
    arrivalLocation: "",
    date: "",
  },
};
