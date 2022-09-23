import { Dispatch, SetStateAction } from "react";

import { TripInputs } from "../interfaces";

export type SetInputProp = {
  setInputs: Dispatch<SetStateAction<TripInputs>>;
};

export interface FirstAddProps {
  inputs: TripInputs;
  setInputs: Dispatch<SetStateAction<TripInputs>>;
}

export type UseFirstAddManager = (
  setTripInputsFilled: Dispatch<SetStateAction<boolean>>
) => FirstAddProps;

export type CoordinatesProps = {
  departureCoordinates: [number, number];
  arrivalCoordinates: [number, number];
};

export type UseSecondMapSectionManager = ({
  departureCoordinates,
  arrivalCoordinates,
}: CoordinatesProps) => void;
