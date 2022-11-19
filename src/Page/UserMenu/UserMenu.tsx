import { Box, Links, icons } from "../../commonStyle/Common.styled";
import { Phonebook } from "../../components/PhoneBook/PhoneBook";
import { ConteierContacts, NameText } from "./UserMenu.styled";
import { fetchLogOutUser } from "../../redux/auth/authOperations";
import { useTypedDispatch } from "../../redux/store";
import { Button } from "@mui/material";
import { useAppSelector } from "../../hook";
import { useLocation, useNavigate } from "react-router-dom";

const UserMenu: React.FC<{}> = () => {
  const location = useLocation();
  const userName = useAppSelector((state) => state.auth.user.name);
  const token = useAppSelector((state) => state.auth.token);
  const dispatch = useTypedDispatch();

  const navigate = useNavigate();
  const { IconsExpand, IconsCheckBox, IconsStanby, IconsRecord } = icons;

  const handleLogOutUser = () => {
    dispatch(fetchLogOutUser());
    navigate("/");
  };

  return (
    <>
      <ConteierContacts>
        <IconsRecord />
        <Box
          width="380px"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gridGap={[20]}
          px={[3]}
        >
          <NameText>Hello {userName}</NameText>

          <Button
            variant="contained"
            color="primary"
            size="small"
            type="button"
            onClick={handleLogOutUser}
          >
            Logout
          </Button>
        </Box>
        {token && <Phonebook />}
        <Box
          display="flex"
          alignItems="flex-start"
          gridGap="20px"
          justifyContent="space-around"
          mt="auto"
          width="380px"
        >
          <Links to={location.state?.from ?? "/"}>
            <IconsExpand />
          </Links>
          <Links to={location.state?.from ?? "/"}>
            <IconsStanby />
          </Links>
          <Links to={location.state?.from ?? "/"}>
            <IconsCheckBox />
          </Links>
        </Box>
      </ConteierContacts>
    </>
  );
};

export default UserMenu;
