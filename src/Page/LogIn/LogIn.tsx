import { useLocation } from "react-router-dom";
import { Box, icons } from "../../commonStyle/Common.styled";
import { ConteierLogin } from "./LogIn.styled";
import { BackNavigation } from "../../components/BackNavigation/BackNavigation";
import { LoginForm } from "./LoginForm";
import { Redirect } from "../Register/Register.styled";

const LogInUser: React.FC<{}> = () => {
  const location = useLocation();
  const { IconsRecord } = icons;

  return (
    <ConteierLogin
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <IconsRecord />
      <LoginForm />

      <Redirect to="/register">Sign Up?</Redirect>

      <Box
        display="flex"
        alignItems="flex-start"
        gridGap="20px"
        justifyContent="space-around"
        mt="auto"
        width="380px"
      >
        <BackNavigation locations={location.state?.from} />
      </Box>
    </ConteierLogin>
  );
};

export default LogInUser;
