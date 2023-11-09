import styled, { css } from "styled-components/native";
import theme from "../../../../styles/theme";

function setBorderEnable(enable: boolean) {
  if (enable) {
    return css`
      border: 2px ${theme.listVisitor.enableBorder} solid;
    `;
  }
}

function setColorEnable(enable: boolean) {
  if (enable) {
    return css`
      color: ${theme.white};
    `;
  }

  return css`
    color: ${theme.black};
  `;
}

export const Container = styled.TouchableOpacity<{ enable: boolean }>`
  width: 100%;
  height: 55px;
  background-color: ${(props) =>
    props.enable ? theme.listVisitor.enable : theme.listColor};
  border-radius: 10px;
  margin-top: 15px;
  ${(props) => setBorderEnable(props.enable)};
`;
export const Grid = styled.View`
  width: 95%;
  height: 100%;
  margin: auto;
  flex-direction: row;
`;
export const InformationContent = styled.View`
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
`;
export const VisitorName = styled.Text<{ enable: boolean }>`
  font-size: 12px;
  ${(props) => setColorEnable(props.enable)};
  font-family: ${theme.fonts.montserratMedium};
`;
export const VisitorPhone = styled.Text<{ enable: boolean }>`
  font-size: 12px;
  ${(props) => setColorEnable(props.enable)};
  font-family: ${theme.fonts.montserratMedium};
`;

export const DateContent = styled.View`
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const VisitorDate = styled.Text<{ enable: boolean }>`
  font-size: 12px;
  ${(props) => setColorEnable(props.enable)};
  font-family: ${theme.fonts.montserratMedium};
`;
