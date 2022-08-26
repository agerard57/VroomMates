import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { usePageTitle } from "../../core";
import { User, UserInitializer } from "../interfaces";
import { getUser } from "../services";
import { PageType } from "../types";

export const useProfilePage = (): { user: User; pageType: PageType } => {
  const { t } = useTranslation("ProfilePage");

  const [pageType, setPageType] = useState<PageType>("u2u");
  const [user, setUser] = useState<User>(UserInitializer);

  const loggedUser = { id: "62b118b7af7d95ee39d508eb", status: "passenger" }; // TODO Implement real log feature
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
    if (id) {
      getUserById(id);
      // Is this the logged user's profile?
      if (loggedUser.id === id) {
        setPageType("up");
        // Is the logged user an admin?
      } else if (loggedUser.status === "admin") {
        // Is the fetched user an admin?
        user.status === "admin" ? setPageType("a2a") : setPageType("a2u");
      } else {
        setPageType("u2u");
      }
    } else {
      getUserById(loggedUser.id);
      setPageType("up");
    }
  }, [loggedUser.id, loggedUser.status, id, user.status]);

  return { user, pageType };
};
