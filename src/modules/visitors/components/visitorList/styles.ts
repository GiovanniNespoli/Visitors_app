import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  background-color: ${theme.listColor};
  border-radius: 10px;
  margin-top: 15px;
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
export const VisitorName = styled.Text`
  font-size: 12px;
  color: ${theme.black};
  font-family: ${theme.fonts.montserratMedium};
`;
export const VisitorPhone = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  font-family: ${theme.fonts.montserratMedium};
`;

export const DateContent = styled.View`
  width: 50%;
  height: 100%;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const VisitorDate = styled.Text`
  font-size: 12px;
  color: ${theme.black};
  font-family: ${theme.fonts.montserratMedium};
`;
