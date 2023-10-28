import styled from "styled-components/native";
import theme from "../../../../styles/theme";

export const ModalBackground = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.View`
  width: 80%;
  height: 40%;
  background-color: ${theme.primary};
  border-radius: 15px;

  align-items: center;
  justify-content: space-evenly;
`;

export const ModalTitle = styled.Text`
  font-size: 24px;
  font-family: ${theme.fonts.lightMontserratItalic};
  border-bottom-width: 2px;
  border-bottom-color: ${theme.secondary};
  padding-bottom: 3px;
`;
export const ModalButtonContent = styled.View`
  width: 100%;
  height: 40%;
  align-items: center;
  justify-content: space-between;
`;

interface IModalButtonProps {
  borderColor: string;
}

export const ModalButton = styled.TouchableOpacity<IModalButtonProps>`
  width: 60%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.borderColor};
  border-radius: 10px;
`;
export const ModalTextButton = styled.Text`
  font-family: ${theme.fonts.montserrat400};
`;
