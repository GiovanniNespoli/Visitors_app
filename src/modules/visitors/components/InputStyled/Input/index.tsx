import { TextInputProps } from "react-native";
import { StyledInput } from "../styles";

export default function Input({
  placeholder,
  value,
  onChangeText,
  onBlur,
}: TextInputProps) {
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
    />
  );
}
