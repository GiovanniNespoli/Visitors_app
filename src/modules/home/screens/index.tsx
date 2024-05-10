import Header from "../../../components/Header";
import VisitorsList from "../components/VisitorsList";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Container, Grid } from "./styles";
import { useWindowDimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { IconButton } from "native-base";
import theme from "../../../styles/theme";

export default function Home({ navigation }) {
  const windowHeight = useWindowDimensions().height;

  return (
    <Container style={[{ minHeight: Math.round(windowHeight) }]}>
      <IconButton
        variant="solid"
        width={"50px"}
        height={"50px"}
        position={"absolute"}
        zIndex={1}
        bottom={10}
        left={10}
        backgroundColor={theme.green}
        borderRadius={50}
        onPress={() => navigation.navigate("Teste")}
        _icon={{
          as: Entypo,
          name: "plus",
          size: 8,
        }}
      />
      <Header />
      <Grid>
        <VisitorsList />
      </Grid>
    </Container>
  );
}
