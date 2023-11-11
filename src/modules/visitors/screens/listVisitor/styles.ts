import styled, { css } from "styled-components/native";
import theme from "../../../../styles/theme";
import { MaskedTextInput } from "react-native-mask-text";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
`;
export const FilterContainer = styled.View`
  width: 100%;
  height: 18%;

  align-items: center;
  justify-content: space-between;
`;
export const FilterContent = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${theme.inputColors};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
function backgroundEnable(enableColor: boolean) {
  if (!enableColor) {
    return css`
      background-color: ${theme.filterButton.disable};
    `;
  }

  return css`
    background-color: ${theme.filterButton.enabled};
  `;
}

export const FilterButton = styled.TouchableOpacity<{ disableColor: boolean }>`
  width: 120px;
  height: 30px;
  ${(props) => backgroundEnable(props.disableColor)}
  border-radius: 5px;
`;
export const FilterText = styled.Text`
  font-size: 14px;
  font-family: ${theme.fonts.montserratMedium};
  margin: auto;
`;
export const ListContainer = styled.View`
  width: 100%;
  height: 70%;
  justify-content: space-between;
`;
export const ListHeader = styled.Text`
  font-size: 20px;
  color: ${theme.white};
  font-family: ${theme.fonts.montserratMedium};
`;
export const List = styled.View`
  width: 100%;
  height: 70%;
`;
export const FilterButtonContent = styled.View`
  width: 100%;
  height: 50px;

  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;
export const MaskedTextInputStyled = styled(MaskedTextInput)`
  width: 125px;
  height: 50%;
  background-color: ${theme.white};
  border-radius: 5px;
  padding-left: 10px;
`;
