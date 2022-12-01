import { Links, icons } from "../../commonStyle/Common.styled";

type Locations = {
  locations: string | null;
};

const BackNavigation: React.FC<Locations> = ({ locations }): JSX.Element => {
  const { IconsExpand, IconsCheckBox, IconsStanby } = icons;

  return (
    <>
      <Links to={locations ?? "/"}>
        <IconsExpand />
      </Links>
      <Links to={locations ?? "/"}>
        <IconsStanby />
      </Links>
      <Links to={locations ?? "/"}>
        <IconsCheckBox />
      </Links>
    </>
  );
};

export { BackNavigation };
