import { ResizeMode, Video } from "expo-av";
import {
  ButtonContent,
  Container,
  Content,
  Divisor,
  Title,
  VideoContent,
  VideoPlayer,
  WishButton,
  WishButtonText,
} from "./styles";
import { useRef, useState } from "react";

export default function HomeScreen({ navigation }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <Container
      colors={["#200726", "#4A1259", "#622773"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
    >
      <Content>
        <Title>Oque são os sonhos ...</Title>
        <VideoContent>
          <VideoPlayer
            ref={video}
            source={require("../../../assets/video.mp4")}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </VideoContent>
        <Divisor />
        <ButtonContent>
          <WishButton>
            <WishButtonText
              onPress={() => {
                navigation.navigate("createDreams");
              }}
            >
              Cadastrar um sonho
            </WishButtonText>
          </WishButton>
          <WishButton>
            <WishButtonText
              onPress={() => {
                navigation.navigate("tableDreams");
              }}
            >
              Visualizar seus sonhos
            </WishButtonText>
          </WishButton>
        </ButtonContent>
      </Content>
    </Container>
  );
}
