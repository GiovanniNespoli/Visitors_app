import { TextInputMask } from "react-native-masked-text";
import styled, { css } from "styled-components/native";
import theme from "../../../../styles/theme";

function styles() {
  return css`
    width: 100%;
    height: 50px;
    background-color: ${theme.white};

    border-radius: 10px;
    border: 2px ${theme.inputBorder} solid;

    padding-left: 20px;
  `;
}

export const StyledInput = styled.TextInput`
  ${styles()}
`;

export const StyledMaskedInput = styled(TextInputMask)`
  ${styles()}
`;
