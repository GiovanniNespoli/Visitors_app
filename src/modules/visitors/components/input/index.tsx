import {
  Container,
  InputName,
  TextInputContainer,
  TextInputStyles,
} from "./styles";

interface IInputProps {
  name: string;
}

export default function Input({ name }: IInputProps) {
  return (
    <Container>
      <InputName>{name}</InputName>
      <TextInputContainer>
        <TextInputStyles />
      </TextInputContainer>
    </Container>
  );
}
