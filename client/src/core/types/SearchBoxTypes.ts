import { Dispatch, FormEvent, RefObject, SetStateAction } from "react";

import { SearchBoxInterfaces } from "../interfaces";

type SearchBoxProps = {
  ref: RefObject<HTMLFormElement>;
  height: number;
  setHeight: Dispatch<SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  searchInputs: SearchBoxInterfaces["SearchInputs"];
  setSearchInputs: Dispatch<
    SetStateAction<SearchBoxInterfaces["SearchInputs"]>
  >;
  handleSearchSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

type UseSearchBoxManager = () => SearchBoxProps;

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
