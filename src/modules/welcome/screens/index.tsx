import { Container, Content, TitleContent, WelcomeTitle } from "./styles";
import NextButton from "../../../components/NextButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <Container
      colors={["#200726", "#4A1259", "#622773"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
    >
      <Content>
        <WelcomeTitle>Wish list</WelcomeTitle>
        <NextButton
          onPress={() => {
            navigation.navigate("homeModule");
          }}
        />
      </Content>
    </Container>
  );
}
