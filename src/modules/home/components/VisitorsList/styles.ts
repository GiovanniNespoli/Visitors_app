import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled.View`
  height: 100%;
  width: 100%;
`;

export const VisitorListContainer = styled.View`
  width: 100%;
  height: 75%;
`;

export const Warning = styled.Text`
  margin: auto;
  text-align: center;
  width: 90%;

  font-size: 18px;
  font-weight: bold;
  color: ${theme.red};
`;
