import { useEffect, useState } from "react";

import { ProfileHeaderInitializer } from "../interfaces";
import { getProfilePicSrc } from "../services";

export const useProfileBanner = (id: string) => {
  const [profilePicSrc, setProfilePicSrc] = useState<string>(
    ProfileHeaderInitializer.user.profilePicSrc
  );

  useEffect(() => {
    if (id.length > 0) {
      getProfilePicSrc(id).then((response) =>
        setProfilePicSrc(response.profilePicSrc)
      );
    }
  }, [id]);

  return { profilePicSrc };
};
