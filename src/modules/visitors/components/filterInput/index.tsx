import { Container } from "./styles";

interface IFilterInput {
  placeholder: string;
  type: "default" | "number-pad";
  mask: "99/99/9999" | "AAAAAAAAAAAAAAAAAAAAA";
  onSendText(value: string): void;
}

export default function FilterInput({
  placeholder,
  type,
  mask,
  onSendText,
}: IFilterInput) {
  return (
    <Container
      mask={mask}
      placeholder={placeholder}
      onChangeText={(text) => {
        onSendText(text);
      }}
      keyboardType={type}
    ></Container>
  );
}
