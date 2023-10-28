import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  height: 90%;
  width: 90%;

  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: ${theme.primary};
  font-size: 32px;
  font-family: ${theme.fonts.lightMontserratItalic};
  border-bottom-width: 2px;
  border-bottom-color: ${theme.primary};
  padding-bottom: 3px;
`;

export const StyledFlatList = styled.FlatList`
  width: 100%;
`;

export const FlatListContent = styled.View`
  width: 100%;
  height: 40%;
`;

export const TableContent = styled.View`
  height: 35px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TableLabel = styled.View<{ size: number }>`
  height: 100%;
  width: ${(props) => `${props.size}%`};
  background-color: ${theme.primary};
  border-radius: 7px;
  align-items: center;
  justify-content: center;
`;

export const TableText = styled.Text`
  font-size: 15px;
`;

export const DeleteContent = styled.TouchableOpacity`
  height: 100%;
  width: 100%;
  background-color: ${theme.deleteColor};
  border-radius: 7px;

  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  width: 60%;
  height: 60px;
  border: 4px solid ${theme.purple};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const BackButtonText = styled.Text`
  color: ${theme.primary};
  font-family: ${theme.fonts.montserrat400};
  font-size: 18px;
`;
