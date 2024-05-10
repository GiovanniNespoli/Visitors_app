import { FontAwesome5 } from "@expo/vector-icons";
import { VisitorHeaderContainer, ListTitle } from "./styles";

interface ISubtitleProps {
  title: string;
  iconName: string;
}

export default function Subtitle({ iconName, title }: ISubtitleProps) {
  return (
    <VisitorHeaderContainer>
      <FontAwesome5 name={iconName} size={24} color="black" />
      <ListTitle>{title}</ListTitle>
    </VisitorHeaderContainer>
  );
}
