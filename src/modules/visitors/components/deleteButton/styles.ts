import styled, { css } from "styled-components/native";
import theme from "../../../../styles/theme";

function setDisabledColor(disabled: boolean) {
  if (disabled) {
    return css`
      color: ${theme.deleteButton.textDisable};
    `;
  }
  return css`
    color: ${theme.deleteButton.textEnable};
  `;
}

export const DeleteButtonContainer = styled.View`
  width: 100%;
  height: 15%;
  align-items: center;
  justify-content: center;
`;
export const Delete = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  background-color: ${theme.deleteButton.disable};
`;
export const DeleteText = styled.Text<{ disabled: boolean }>`
  font-size: 20px;
  font-family: ${theme.fonts.montserratBold};
  ${(props) => setDisabledColor(props.disabled)};
  margin: auto;
`;
