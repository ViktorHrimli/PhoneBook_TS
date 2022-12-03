import { Box, icons } from "../../commonStyle/Common.styled";
import { Phonebook } from "../../components/PhoneBook/PhoneBook";
import { ConteierContacts, NameText } from "./UserMenu.styled";
import { fetchLogOutUser } from "../../redux/auth/authOperations";
import { useTypedDispatch } from "../../redux/store";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppSelector } from "../../hook";
import { useLocation, useNavigate } from "react-router-dom";
import { BackNavigation } from "../../components/BackNavigation/BackNavigation";

const UserMenu: React.FC<{}> = () => {
  const location = useLocation();
  const userName = useAppSelector((state) => state.auth.user.name);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useTypedDispatch();

  const navigate = useNavigate();
  const { IconsRecord } = icons;

  const handleLogOutUser = () => {
    dispatch(fetchLogOutUser());
    navigate("/");
  };

  return (
    <>
      <ConteierContacts>
        <IconsRecord />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gridGap={[80]}
          px={[3]}
          mt={[20]}
        >
          <NameText>Hello {userName}</NameText>
          <Button
            variant="contained"
            color="primary"
            size="small"
            type="button"
            onClick={handleLogOutUser}
            endIcon={<LogoutIcon />}
          >
            Logout
          </Button>
        </Box>
        {token && <Phonebook />}
        <Box
          display="flex"
          alignItems="flex-start"
          gridGap="100px"
          justifyContent="space-around"
          mt="auto"
        >
          <BackNavigation locations={location.state?.from} />
        </Box>
      </ConteierContacts>
    </>
  );
};

export default UserMenu;
