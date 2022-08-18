import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { usePageTitle } from "../../core";
import { User, UserInitializer } from "../interfaces";
import { getUser } from "../services";

export const useProfilePage = (): { user: User } => {
  const { t } = useTranslation("ProfilePage");

  const [user, setUser] = useState<User>(UserInitializer);
  const { id } = useParams();

  usePageTitle(
    t("title", {
      name: user.name.first_name,
    })
  );

  useEffect(() => {
    if (id) {
      getUser(id)
        .then((user) => {
          if (user) {
            setUser(user);
          }
        })
        .catch((_err) => {
          window.location.href = "/error?code=404";
        });
    }
  }, [id]);

  return { user };
};
