import styled from "styled-components/native";
import theme from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.primary};
  align-items: center;
`;

export const Grid = styled.View`
  width: 90%;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: 25%;
  background-color: ${theme.secondary};
  align-items: center;
`;
export const NavigationContainer = styled.View`
  width: 100%;
  height: 50%;

  flex-direction: row;
  align-items: center;
`;
export const ButtonNavigationContent = styled.TouchableOpacity`
  width: 15%;
  height: 100%;

  justify-content: center;
`;
export const TitleText = styled.Text`
  margin: auto;
  color: ${theme.white};
  font-size: 24px;
  font-family: ${theme.fonts.montserratMedium};
  text-transform: capitalize;
`;
export const SubTitleContainer = styled.View`
  width: 100%;
  height: 50%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const SubTitle = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.montserratMedium};
  text-transform: uppercase;
  color: ${theme.white};
`;
export const Icon = styled.View``;
