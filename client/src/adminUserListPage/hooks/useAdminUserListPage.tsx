import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { usePageTitle } from "../../core";
import { User, userInitializer } from "../interfaces";
import { getUsers } from "../services";

type UseAdminUserListPageManager = () => {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredUsers: User[];
};

export const useAdminUserListPage: UseAdminUserListPageManager = () => {
  const { t } = useTranslation("AdminUserListPage");

  const [users, setUsers] = useState<User[]>([userInitializer]);

  usePageTitle(t("title"));

  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.name.firstName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          user.name.lastName
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getUsers().then((users) => {
      setFilteredUsers(users);
      setUsers(users);
    });
  }, []);

  return { handleSearch, filteredUsers };
};
