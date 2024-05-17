import { FontAwesome5 } from "@expo/vector-icons";
import { VisitorHeaderContainer, ListTitle, IconContainer } from "./styles";

interface ISubtitleProps {
  title: string;
  iconName: string;
}

export default function Subtitle({ iconName, title }: ISubtitleProps) {
  return (
    <VisitorHeaderContainer>
      <IconContainer>
        <FontAwesome5 name={iconName} size={24} color="black" />
      </IconContainer>
      <ListTitle>{title}</ListTitle>
    </VisitorHeaderContainer>
  );
}
