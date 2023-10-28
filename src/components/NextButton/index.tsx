import React from "react";
import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButtonProps } from "react-native-gesture-handler";
import theme from "../../styles/theme";

interface INextButtonProps extends RectButtonProps {
  onPress: () => void;
}

export default function NextButton({ onPress }: INextButtonProps) {
  return (
    <Container onPress={onPress}>
      <MaterialIcons name="arrow-right-alt" size={50} color={theme.primary} />
    </Container>
  );
}
