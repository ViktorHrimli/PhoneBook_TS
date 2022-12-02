import Media from "react-media";
import { useLocation } from "react-router-dom";
import { BurgerNav } from "../BurgerNav/BurgerNav";
import {
  Box,
  Links,
  icons,
  LinksContacts,
} from "../../commonStyle/Common.styled";

export function Navigation() {
  const { IconsRecord } = icons;
  const location = useLocation();

  return (
    <>
      <Box
        as="nav"
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        gridGap="15px"
        position="relative"
      >
        <Media
          query="(max-width: 380px)"
          render={() => (
            <>
              <BurgerNav />
            </>
          )}
        />
        <IconsRecord />
        <Media
          query="(min-width: 380px)"
          render={() => (
            <>
              <LinksContacts to="/contacts" state={{ from: location }}>
                Contacts
              </LinksContacts>
              <Links to="/register" state={{ from: location }}>
                Register
              </Links>
              <Links to="/login" state={{ from: location }}>
                Login
              </Links>
            </>
          )}
        />
      </Box>
    </>
  );
}
