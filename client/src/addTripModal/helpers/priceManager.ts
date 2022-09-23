export const priceManager = (distance: number) => {
  const distanceInMi = distance / 1609.344;
  const price = (cost: number) => Math.round(distanceInMi * cost * 1e1) / 1e1;

  // Passenger pays $0.40 and driver earns $0.36 per mile if distance is less than 20 miles
  if (distanceInMi < 20) {
    return {
      driver_fee: price(0.36),
      service_fee: price(0.04),
      total: price(0.4),
    };

    // Passenger pays $0.30 and driver earns $0.27 per mile if distance is between 20 and 50 miles
  } else if (distanceInMi >= 20 && distanceInMi <= 50) {
    return {
      driver_fee: price(0.27),
      service_fee: price(0.03),
      total: price(0.3),
    };

    // Passenger pays $0.20 and driver earns $0.18 per mile if distance is > 50 miles
  } else {
    return {
      driver_fee: price(0.18),
      service_fee: price(0.02),
      total: price(0.2),
    };
  }
};
