/** @jsxImportSource @emotion/react */
import { FormEvent, useEffect, useRef } from "react";
import { useState } from "react";

import { SearchBoxInterfaces, SearchBoxInitializers } from "../interfaces";
import { SearchBoxTypes } from "../types";

export const useSearchBox: SearchBoxTypes["UseSearchBoxManager"] = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [searchInputs, setSearchInputs] = useState<
    SearchBoxInterfaces["SearchInputs"]
  >(SearchBoxInitializers["SearchInputs"]);

  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLFormElement>(null);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
    window.location.href = `/search?type=${searchInputs.type}&departureLocation=${searchInputs.departureLocation}&arrivalLocation=${searchInputs.arrivalLocation}&date=${searchInputs.date}`;
  };

  useEffect(() => {
    // if page search and and params are not empty, set search inputs
    if (
      window.location.pathname === "/search" &&
      window.location.search !== ""
    ) {
      const params = new URLSearchParams(window.location.search);

      // If params are not empty, close search box
      if (params.get("type") !== null) setIsOpen(false);

      setSearchInputs({
        type:
          (params.get("type") as SearchBoxInterfaces["SearchInputs"]["type"]) ||
          "",
        departureLocation: params.get("departureLocation") || "",
        arrivalLocation: params.get("arrivalLocation") || "",
        date: params.get("date") || "",
      });
    }
  }, []);

  // This sets the height of the search box for the animation
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (ref.current && ref.current.clientHeight)
      setHeight(ref.current.clientHeight);
  });

  return {
    ref,
    height,
    setHeight,
    isOpen,
    setIsOpen,
    searchInputs,
    setSearchInputs,
    handleSearchSubmit,
  };
};
