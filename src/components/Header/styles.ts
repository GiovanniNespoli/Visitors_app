import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 15%;
  background-color: ${theme.primary};

  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.montserratBold};

  color: ${theme.white};
`;
