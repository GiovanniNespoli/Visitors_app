import styled from "styled-components/native";
import theme from "../../../styles/theme";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled(LinearGradient)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  height: 90%;
  width: 90%;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${theme.primary};
  font-size: 18px;
  font-family: ${theme.fonts.lightMontserratItalic};

  margin-bottom: 10px;
`;
export const VideoContent = styled.View`
  width: 100%;
  height: 30%;
`;

export const VideoPlayer = styled(Video)`
  width: 100%;
  height: 100%;
`;
export const Divisor = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${theme.primary};
  border-radius: 2px;
  margin-bottom: 15px;
`;

export const ButtonContent = styled.View`
  width: 100%;
  height: 30%;
  align-items: center;
  justify-content: space-evenly;
`;

export const WishButton = styled.TouchableOpacity`
  width: 80%;
  height: 60px;
  border: 4px solid ${theme.purple};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
export const WishButtonText = styled.Text`
  color: ${theme.primary};
  font-family: ${theme.fonts.montserrat400};
  font-size: 18px;
`;
