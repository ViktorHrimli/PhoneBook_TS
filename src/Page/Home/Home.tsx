import { TitleText, Text, ConteinerNavBack } from "./Home.styled";
import { Conteier, icons } from "../../commonStyle/Common.styled";
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
      <ConteinerNavBack>
        <IconsExpand />
        <IconsStanby />
        <IconsCheckBox />
      </ConteinerNavBack>
    </Conteier>
  );
};

export default Home;
