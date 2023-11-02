import styled from "styled-components/native";
import theme from "../../../../styles/theme";

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
`;
export const FilterButton = styled.TouchableOpacity`
  width: 120px;
  height: 30px;
  background-color: ${theme.white};
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
  background-color: red;
`;
