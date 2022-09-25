import { useEffect, useState } from "react";

import { getStatusIcon } from "../helpers";
import { ProfileHeader, ProfileHeaderInitializer } from "../interfaces";
import { getUserData } from "../services";

export const useProfileHeader = (id: string) => {
  const [user, setUser] = useState<ProfileHeader["user"]>(
    ProfileHeaderInitializer.user
  );
  const [stats, setStats] = useState<ProfileHeader["stats"]>(
    ProfileHeaderInitializer.stats
  );

  useEffect(() => {
    if (id.length > 0)
      getUserData(id).then((data) => {
        setUser(data.user);
        setStats(data.stats);
      });
  }, [id]);

  // Get age from DOB
  const dob = new Date(user.dateOfBirth);
  const age = (new Date().getFullYear() - dob.getFullYear()).toString();
  const accountIcon = getStatusIcon(user.status);
  const rating = stats.avgRating ? stats.avgRating : 0;

  return { user, stats, age, accountIcon, rating };
};
