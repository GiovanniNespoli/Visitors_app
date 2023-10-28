import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.bakcgroundPurple};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  height: 90%;
  width: 90%;

  align-items: center;
  justify-content: space-evenly;
`;

export const WelcomeTitle = styled.Text`
  color: ${theme.primary};
  font-size: 24px;
  font-family: ${theme.fonts.lightMontserratItalic};
  border-bottom-width: 2px;
  border-bottom-color: ${theme.primary};
  padding-bottom: 3px;
`;

export const DreamsInputs = styled.TextInput`
  width: 80%;
  height: 50px;
  border-bottom-width: 2px;
  border-bottom-color: ${theme.purple};
  color: ${theme.primary};
  font-family: ${theme.fonts.montserrat400};
`;
