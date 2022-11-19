import { useAppSelector } from "../hook";
import { useNavigate } from "react-router-dom";
import { Props } from "./Types";

const PublickRoute: React.FC<Props> = ({
  component: Component,
  redirect = "/",
}): any => {
  const navigate = useNavigate();
  const isLogged = useAppSelector((state) => state.auth.isLoggedIn);
  return isLogged ? navigate(redirect) : Component;
};

export { PublickRoute };
