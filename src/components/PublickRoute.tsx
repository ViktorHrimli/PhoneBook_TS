import { useAppSelector } from "../hook";
import { Navigate } from "react-router-dom";
import { Props } from "./Types";

const PublickRoute: React.FC<Props> = ({
  component: Component,
  redirect = "/",
}): JSX.Element => {
  const isLogged = useAppSelector((state) => state.auth.isLoggedIn);
  return isLogged ? <Navigate to={redirect} /> : Component;
};

export { PublickRoute };
