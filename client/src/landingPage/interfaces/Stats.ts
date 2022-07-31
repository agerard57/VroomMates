export interface Stats {
  trips: {
    nbSingleTrips: number;
    nbFrequentTrips: number;
    totalTrips: number;
    totalDistance: { $numberDecimal: string };
  };
  users: {
    nbDrivers: number;
    nbPassengers: number;
    totalUsers: number;
  };
}

export const StatsInitializer = {
  trips: {
    nbSingleTrips: 0,
    nbFrequentTrips: 0,
    totalTrips: 0,
    totalDistance: { $numberDecimal: "0.0" },
  },
  users: {
    nbDrivers: 0,
    nbPassengers: 0,
    totalUsers: 0,
  },
};
