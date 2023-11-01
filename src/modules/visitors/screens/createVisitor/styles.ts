import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled.View`
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

export const Line = styled.View`
  width: 100%;
  height: 3px;
  background-color: ${theme.white};
  border-radius: 5px;
`;
