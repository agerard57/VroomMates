import { Dispatch, SetStateAction } from "react";

import { TripTypes } from "../../core";
import { TripInputs, MapboxData } from "../interfaces";

type typeSectionProps = {
  typeChecked: TripTypes["Type"];
  setTypeChecked: Dispatch<SetStateAction<TripTypes["Type"]>>;
};

type startFrequentDateSectionProps = {
  setFrequentStartDate: Dispatch<SetStateAction<string>>;
  setFrequentStartTime: Dispatch<SetStateAction<string>>;
};

type endFrequentDateSectionProps = {
  setFrequentEndDate: Dispatch<SetStateAction<string>>;
};

type daysSectionProps = {
  days: number[] | undefined;
  setDays: Dispatch<SetStateAction<number[] | undefined>>;
};

type mapSectionProps = {
  setMapboxData: Dispatch<SetStateAction<MapboxData>>;
};

type seatsSectionProps = {
  seatsAvailable: number;
  setSeatsAvailable: Dispatch<SetStateAction<number>>;
};

export interface FirstAddProps {
  typeSectionProps: typeSectionProps;
  startFrequentDateSectionProps: startFrequentDateSectionProps;
  endFrequentDateSectionProps: endFrequentDateSectionProps;
  daysSectionProps: daysSectionProps;
  mapSectionProps: mapSectionProps;
  seatsSectionProps: seatsSectionProps;
}

export type UseFirstAddManager = (
  inputs: TripInputs,
  setInputs: Dispatch<SetStateAction<TripInputs>>
) => FirstAddProps;
