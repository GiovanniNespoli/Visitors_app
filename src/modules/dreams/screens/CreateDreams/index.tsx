import { useState } from "react";
import NextButton from "../../../../components/NextButton";
import theme from "../../../../styles/theme";
import DreamsModal from "../../components/modal";
import { Container, Content, DreamsInputs, WelcomeTitle } from "./styles";
import { useDreams } from "../../hooks/dreams";
import uuid from "react-native-uuid";
import { Audio } from "expo-av";

export default function CreateDreamScreen({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [inputDreamsTitle, setInputDreamsTitle] = useState<string>("");
  const [inputDreamsDescription, setInputDreamsDescription] =
    useState<string>("");

  const { setDreamsListHandler, dreamsList } = useDreams();
  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/plim.mp3")
    );

    console.log("Playing Sound");
    await sound.playAsync();
  }

  return (
    <>
      <DreamsModal
        onNavigate={() => {
          setOpenModal(false);
          navigation.navigate("tableDreams");
        }}
        openModal={openModal}
        closeModal={() => {
          setOpenModal(false);
        }}
      />
      <Container>
        <Content>
          <WelcomeTitle>Cadastrar um sonho</WelcomeTitle>
          <DreamsInputs
            placeholderTextColor={theme.primary}
            placeholder="Título"
            onChangeText={(value) => {
              setInputDreamsTitle(value);
            }}
          />
          <DreamsInputs
            placeholderTextColor={theme.primary}
            placeholder="Descrição"
            onChangeText={(value) => {
              setInputDreamsDescription(value);
            }}
          />
          <NextButton
            onPress={() => {
              playSound();
              setOpenModal(true);
              setDreamsListHandler({
                id: uuid.v4().toString(),
                title: inputDreamsTitle,
                description: inputDreamsDescription,
              });
            }}
          />
        </Content>
      </Container>
    </>
  );
}
