import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const FormContent = styled.View`
  width: 100%;
  height: 60%;

  justify-content: space-around;
`;

export const ErrorText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${theme.red};

  padding-top: 10px;
`;
