import { TextInputProps } from "react-native";
import { StyledMaskedInput } from "../styles";

export default function MaskedInput({
  placeholder,
  value,
  onChangeText,
  onBlur,
}: TextInputProps) {
  return (
    <StyledMaskedInput
      type={"cel-phone"}
      options={{
        maskType: "BRL",
        withDDD: true,
        dddMask: "(99) ",
      }}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
}
