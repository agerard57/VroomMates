import { AdminIcon, DriverIcon } from "../assets";
import { UserType } from "../types";

type GetStatusIcon = (status: UserType["Status"]) => string | undefined;

export const getStatusIcon: GetStatusIcon = (status) => {
  if (status === "driver") return DriverIcon;
  else if (status === "admin") return AdminIcon;
  else return undefined;
};
