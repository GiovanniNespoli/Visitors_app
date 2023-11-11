import { TextInput } from "react-native";
import {
  Container,
  InputName,
  MaskedInputStyles,
  TextInputContainer,
  TextInputStyles,
} from "./styles";

interface IInputProps {
  name: string;
  inputText(value: any): void;
  masked?: boolean;
}

export default function Input({ name, inputText, masked }: IInputProps) {
  return (
    <Container>
      <InputName>{name}</InputName>
      <TextInputContainer>
        {masked ? (
          <MaskedInputStyles
            mask="(99) 99999-9999"
            keyboardType="number-pad"
            onChangeText={(value) => {
              inputText(value);
            }}
          />
        ) : (
          <TextInputStyles
            onChangeText={(value) => {
              inputText(value);
            }}
          />
        )}
      </TextInputContainer>
    </Container>
  );
}
