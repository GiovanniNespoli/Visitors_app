import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${theme.background};
`;

export const Grid = styled.View`
  height: 85%;
  width: 85%;

  margin: auto;
`;

export const Line = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${theme.white};
  border-radius: 5px;
`;
