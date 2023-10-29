import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled.View`
  
`;
export const InputName = styled.Text`
  color: ${theme.white};
  font-size: 15px;
  font-family: ${theme.fonts.montserrat400};
  text-transform: capitalize;
  margin-bottom: 5px;
`;
export const TextInputContainer = styled.View`
  width: 100%;
  height: 40px;
  background-color: ${theme.inputColors};
  border-radius: 10px;
  border: #fff 2px solid;
`;
export const TextInputStyles = styled.TextInput`
  width: 100%;
  height: 100%;
  padding-left: 5px;
  color: ${theme.white};
  font-size: 16px;
  font-family: ${theme.fonts.montserratMedium};
`;
