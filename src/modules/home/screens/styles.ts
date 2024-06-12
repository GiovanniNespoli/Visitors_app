import styled from "styled-components/native";
import theme from "../../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.background};
`;

export const Grid = styled.View`
  height: 85%;
  width: 85%;

  margin: auto;
`;

export const VisitorFilterContainer = styled.View`
  width: 100%;
  height: 15%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
