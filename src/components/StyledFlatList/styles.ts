import styled from "styled-components/native";
import theme from "../../styles/theme";

export const ListContainer = styled.View<{ lastItem: boolean }>`
  width: 100%;
  height: 100px;
  background-color: ${theme.white};

  border-radius: 10px;
  border: 2px solid #d9d9d9;

  margin-top: 15px;
  margin-bottom: ${({ lastItem }) => (lastItem ? 100 : 0)}px;

  flex-direction: row;
`;

export const VisitorInformationContainer = styled.View`
  width: 70%;
  height: 100%;

  justify-content: space-evenly;
`;

export const VisitorInformation = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const OptionsContainer = styled.View`
  width: 30%;
  height: 100%;

  align-items: flex-end;
`;

export const ExtraOptionsButton = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  background-color: #3bb2f7;

  align-items: center;
  justify-content: center;

  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
`;
