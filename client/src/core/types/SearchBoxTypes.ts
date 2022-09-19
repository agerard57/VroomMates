import { Dispatch, FormEvent, SetStateAction } from "react";

import { SearchBoxInterfaces } from "../interfaces";

type SearchBoxProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  searchInputs: SearchBoxInterfaces["SearchInputs"];
  setSearchInputs: Dispatch<
    SetStateAction<SearchBoxInterfaces["SearchInputs"]>
  >;
  handleSearchSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

type UseSearchBoxManager = (
  setIsLoading?: Dispatch<SetStateAction<boolean>>
) => SearchBoxProps;

type OpenedSearchBox = {
  canClose: boolean;
  searchInputs: SearchBoxProps["searchInputs"];
  setSearchInputs: SearchBoxProps["setSearchInputs"];
};

type ClosedSearchBox = {
  searchInputs: SearchBoxProps["searchInputs"];
};

export interface SearchBoxTypes {
  UseSearchBoxManager: UseSearchBoxManager;
  OpenedSearchBox: OpenedSearchBox;
  ClosedSearchBox: ClosedSearchBox;
}
