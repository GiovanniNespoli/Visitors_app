import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import {
  VisitorHeaderContainer,
  ListTitle,
  IconContainer,
  GoBackButton,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

interface ISubtitleProps {
  title: string;
  iconName: string;
  goBack?: boolean;
}

export default function Subtitle({ iconName, title, goBack }: ISubtitleProps) {
  const navigation = useNavigation();

  return (
    <VisitorHeaderContainer>
      {goBack ? (
        <GoBackButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </GoBackButton>
      ) : (
        <></>
      )}
      <IconContainer>
        <FontAwesome5 name={iconName} size={24} color="black" />
      </IconContainer>
      <ListTitle>{title}</ListTitle>
    </VisitorHeaderContainer>
  );
}
