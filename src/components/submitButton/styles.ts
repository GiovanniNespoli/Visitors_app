import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: ${theme.green};
  border-radius: 15px;
`;

export const ButtonText = styled.Text`
  margin: auto;
  font-size: 20px;
  font-family: ${theme.fonts.montserratBold};
  color: ${theme.white};
  text-transform: capitalize;
`;
