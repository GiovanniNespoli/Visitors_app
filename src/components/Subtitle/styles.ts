import styled from "styled-components/native";
import theme from "../../styles/theme";

export const VisitorHeaderContainer = styled.View`
  width: 100%;
  height: 10%;

  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.View`
  width: 15%;
`;

export const ListTitle = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.montserratBold};
`;
