import AdminIcon from "../assets/icons/status/adminIcon.svg";
import DriverIcon from "../assets/icons/status/driverIcon.svg";
import { Status } from "../types";

type GetStatusIcon = (status: Status) => string | undefined;

export const getStatusIcon: GetStatusIcon = (status) => {
  if (status === "driver") return DriverIcon;
  else if (status === "admin") return AdminIcon;
  else return undefined;
};
