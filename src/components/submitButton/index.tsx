import { Shadow } from "react-native-shadow-2";
import theme from "../../styles/theme";
import { ButtonText, Container } from "./styles";

interface ISubmitButtonProps {
  onPress: () => void;
  buttonText: string;
}

export default function SubmitButton({
  buttonText,
  onPress,
}: ISubmitButtonProps) {
  return (
    <Shadow
      style={{ height: 45, width: "100%", borderRadius: 15 }}
      distance={7}
      startColor={theme.shadowgreen}
      offset={[0, 3]}
    >
      <Container
        onPress={() => {
          onPress();
        }}
      >
        <ButtonText>{buttonText}</ButtonText>
      </Container>
    </Shadow>
  );
}
