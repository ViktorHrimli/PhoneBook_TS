import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import ContactsIcon from "@mui/icons-material/Contacts";
import MenuIcon from "@mui/icons-material/Menu";
import {
  BurgerItem,
  BurgerList,
  ConteinerBar,
  IconText,
  ConteinerIcon,
} from "./BurgerNav.styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BurgerNav: React.FC<{}> = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const handleClose = (e: any) => {
      if (e.target.nodeName === "DIV") {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClose);

    return () => {
      document.body.removeEventListener("click", handleClose);
    };
  });

  return (
    <>
      {isOpen ? (
        <ConteinerBar>
          <BurgerList>
            <BurgerItem key={1}>
              <ContactsIcon color="secondary" sx={{ fontSize: 30 }} />
              <Link to="/contacts">
                <IconText>Contacts</IconText>
              </Link>
            </BurgerItem>
            <BurgerItem key={2}>
              <LoginIcon color="secondary" sx={{ fontSize: 30 }} />
              <Link to="/login">
                <IconText>LogIn</IconText>
              </Link>
            </BurgerItem>
            <BurgerItem key={3}>
              <AppRegistrationIcon color="secondary" sx={{ fontSize: 30 }} />
              <Link to="/register">
                <IconText>Register</IconText>
              </Link>
            </BurgerItem>
          </BurgerList>
        </ConteinerBar>
      ) : (
        <ConteinerIcon>
          <MenuIcon onClick={handleToggleClick} />
        </ConteinerIcon>
      )}
    </>
  );
};

export { BurgerNav };
