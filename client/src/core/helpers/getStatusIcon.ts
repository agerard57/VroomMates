import { AdminIcon, DriverIcon } from "../assets";
import { UserTypes } from "../types";

type GetStatusIcon = (status: UserTypes["Status"]) => string | undefined;

export const getStatusIcon: GetStatusIcon = (status) => {
  if (status === "driver") return DriverIcon;
  else if (status === "admin") return AdminIcon;
  return undefined;
};
