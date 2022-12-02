import { TitleText, Text } from "./Home.styled";
import { Box, Conteier, icons } from "../../commonStyle/Common.styled";
import { Navigation } from "../../components/Navigation/Navigations";

const Home: React.FC<{}> = () => {
  const { IconsExpand, IconsCheckBox, IconsStanby } = icons;

  return (
    <Conteier>
      <Navigation />

      <Text>
        <TitleText>Україна починається з тебе</TitleText> <br /> В’ячеслав
        Чорновіл
      </Text>
      <Box
        display="flex"
        alignItems="flex-end"
        gridGap="20px"
        justifyContent="space-around"
        mt={[170, 250]}
      >
        <IconsExpand />
        <IconsStanby />
        <IconsCheckBox />
      </Box>
    </Conteier>
  );
};

export default Home;
