import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${theme.purple};

  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
