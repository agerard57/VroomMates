import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { usePageTitle } from "../../core";
import { User, UserInitializer } from "../interfaces";
import { getUser, manageUserBan } from "../services";
import { PageType, UseProfilePageManager } from "../types";

export const useProfilePage: UseProfilePageManager = (loggedUserData) => {
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

  const banUserHandler = () => {
    manageUserBan(user._id).then(() => {
      if (pageType === "a2u") {
        setPageType("a2b");
        toast.success(t("message.ban", { name: user.name.first_name }));
      } else {
        setPageType("a2u");
        toast.success(t("message.unBan", { name: user.name.first_name }));
      }
    });
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
          else if (user.status === "banned") setPageType("a2b");
          else setPageType("a2u");
        else setPageType("u2u");
      } else {
        getUserById(loggedUserData.id);
        setPageType("up");
      }
  }, [user.status]);

  return { user, pageType, banUserHandler };
};
