import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { LoggedUserDataProps, usePageTitle } from "../../core";
import { User, UserInitializer } from "../interfaces";
import { getUser } from "../services";
import { PageType } from "../types";

export const useProfilePage = (
  loggedUserData: LoggedUserDataProps["loggedUserData"]
): { user: User; pageType: PageType } => {
  const { t } = useTranslation("ProfilePage");

  const [pageType, setPageType] = useState<PageType>("u2u");
  const [user, setUser] = useState<User>(UserInitializer);

  const { id } = useParams();

  const pageTitle =
    pageType === "up"
      ? t("titleOwnProfile")
      : t("title", {
          name: user.name.first_name,
        });

  usePageTitle(pageTitle);

  const getUserById = async (id: string) => {
    const user = await getUser(id);
    setUser(user);
  };

  useEffect(() => {
    // Is page /user/:id
    if (loggedUserData)
      if (id) {
        getUserById(id);
        // Is this the logged user's profile?
        if (loggedUserData.id === id) setPageType("up");
        // Is the logged user an admin?
        else if (loggedUserData.role === "admin")
          if (user.status === "admin")
            // Is the fetched user an admin?
            setPageType("a2a");
          else setPageType("a2u");
        else setPageType("u2u");
      } else {
        getUserById(loggedUserData.id);
        setPageType("up");
      }
  }, [user.status]);

  return { user, pageType };
};
