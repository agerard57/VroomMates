import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAllowed: boolean;
  redirectPath?: string;
  children: React.ReactNode;
};

export const ProtectedRoute: FC<Props> = ({
  isAllowed,
  redirectPath = "/home",
  children,
}) => {
  return isAllowed ? (
    children ? (
      <>{children}</>
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={redirectPath} replace />
  );
};
