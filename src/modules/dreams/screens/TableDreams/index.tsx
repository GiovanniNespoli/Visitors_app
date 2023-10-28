import { useState } from "react";
import theme from "../../../../styles/theme";
import {
  BackButton,
  BackButtonText,
  Container,
  Content,
  DeleteContent,
  FlatListContent,
  StyledFlatList,
  TableContent,
  TableLabel,
  TableText,
  Title,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useDreams } from "../../hooks/dreams";
import { Audio } from "expo-av";

export default function TableDreamScreen({ navigation }) {
  const { dreamsList, deleteDreamHandler } = useDreams();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../../../../assets/bad.mp3")
    );

    await sound.playAsync();
  }

  return (
    <Container
      colors={["#200726", "#4A1259", "#622773"]}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
    >
      <Content>
        <Title>Sua lista de sonhos</Title>
        <FlatListContent>
          <StyledFlatList
            data={dreamsList}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TableContent key={item.id}>
                <TableLabel size={20}>
                  <TableText>{item.title}</TableText>
                </TableLabel>
                <TableLabel size={60}>
                  <TableText>{item.description}</TableText>
                </TableLabel>
                <TableLabel size={10}>
                  <DeleteContent
                    onPress={() => {
                      playSound();
                      deleteDreamHandler(item.id);
                    }}
                  >
                    <MaterialIcons
                      name="delete"
                      size={24}
                      color={theme.primary}
                    />
                  </DeleteContent>
                </TableLabel>
              </TableContent>
            )}
          />
        </FlatListContent>
        <BackButton
          onPress={() => {
            navigation.navigate("homeModule");
          }}
        >
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
      </Content>
    </Container>
  );
}
