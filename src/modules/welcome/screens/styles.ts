import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import theme from "../../../styles/theme";

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  height: 20%;
  width: 50%;

  align-items: center;
  justify-content: space-between;
`;

export const TitleContent = styled.View`
  align-items: center;
`;

export const WelcomeTitle = styled.Text`
  color: ${theme.primary};
  font-size: 32px;
  font-family: ${theme.fonts.lightMontserratItalic};
  border-bottom-width: 2px;
  border-bottom-color: ${theme.primary};
  padding-bottom: 3px;
`;
