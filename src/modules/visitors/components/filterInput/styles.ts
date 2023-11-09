import styled from "styled-components/native";
import theme from "../../../../styles/theme";
import { MaskedTextInput } from "react-native-mask-text";

export const Container = styled(MaskedTextInput)`
  width: 125px;
  height: 50%;
  background-color: ${theme.white};
  border-radius: 5px;
  padding-left: 10px;
`;
