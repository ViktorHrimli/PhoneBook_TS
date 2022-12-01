import { useLocation } from "react-router-dom";
import { Box, icons } from "../../commonStyle/Common.styled";
import { ConteierRegister, Redirect } from "./Register.styled";
import { BackNavigation } from "../../components/BackNavigation/BackNavigation";
import { RegisterForm } from "./RegisterForm";

const RegisterUser: React.FC<{}> = (): JSX.Element => {
  const location = useLocation();
  const { IconsRecord } = icons;

  return (
    <ConteierRegister>
      <IconsRecord />
      <RegisterForm />
      <Redirect to="/login">Sign In?</Redirect>
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
    </ConteierRegister>
  );
};
export default RegisterUser;
