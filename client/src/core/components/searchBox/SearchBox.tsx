/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { FC } from "react";
import AnimateHeight from "react-animate-height";

import { useSearchBox } from "../../hooks";
import { RoundedContour } from "../RoundedContour";
import { ClosedSearchBox } from "./ClosedSearchBox";
import { OpenedSearchBox } from "./OpenedSearchBox";

type Props = {
  canClose: boolean;
  outsideStyling?: SerializedStyles;
};

export const SearchBox: FC<Props> = ({ canClose, outsideStyling }) => {
  const {
    ref,
    height,
    setHeight,
    isOpen,
    setIsOpen,
    searchInputs,
    setSearchInputs,
    handleSearchSubmit,
  } = useSearchBox();

  return (
    <AnimateHeight
      height={canClose ? (height === 0 ? "100%" : height) : "auto"}
      duration={500}
      animateOpacity
    >
      <form onSubmit={handleSearchSubmit} ref={ref}>
        <RoundedContour
          onClick={() => {
            setIsOpen(true);
            if (ref.current && ref.current.clientHeight)
              setHeight(ref.current.clientHeight);
          }}
          outsideStyling={css`
            ${outsideStyling}
            padding: ${!canClose || isOpen ? "10%" : "0"};
          `}
        >
          {canClose && !isOpen ? (
            <ClosedSearchBox searchInputs={searchInputs} />
          ) : (
            <OpenedSearchBox
              canClose={canClose}
              searchInputs={searchInputs}
              setSearchInputs={setSearchInputs}
            />
          )}
        </RoundedContour>
      </form>
    </AnimateHeight>
  );
};
