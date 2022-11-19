import { useAppSelector } from "../hook";
import { useNavigate } from "react-router-dom";
import { Props } from "./Types";

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  redirect = "/",
}): any => {
  const isLogged = useAppSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  return !isLogged ? navigate(redirect) : Component;
};

export { PrivateRoute };
