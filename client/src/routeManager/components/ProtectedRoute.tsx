import { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAllowed: boolean;
  redirectPath?: string;
  children: ReactNode;
};

export const ProtectedRoute: FC<Props> = ({
  isAllowed,
  redirectPath = "/home",
  children,
}) =>
  isAllowed ? (
    children ? (
      <>{children}</>
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={redirectPath} replace />
  );
