import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

type GeolocationManager = () => {
  coordinates: [number, number] | [];
  address: string;
};

export const useGeolocation: GeolocationManager = () => {
  const { coords } = useGeolocated();
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState<number[]>([]);

  if (coords && !coordinates.length) {
    const { latitude, longitude } = coords;
    setCoordinates([latitude, longitude]);
  }

  useEffect(() => {
    if (coordinates.length) {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates[1]},${coordinates[0]}.json?access_token=${process.env?.REACT_APP_MAPBOX_TOKEN}&limit=1`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const [{ place_name }] = data.features;
          setAddress(place_name);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [coordinates]);

  return {
    coordinates: coordinates as [number, number],
    address,
  };
};
