import Header from "../../../components/Header";
import VisitorsList from "../components/VisitorsList";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Container, Grid } from "./styles";
import { useWindowDimensions } from "react-native";

export default function Home() {
  const windowHeight = useWindowDimensions().height;

  return (
    <Container style={[{ minHeight: Math.round(windowHeight) }]}>
      <Header />
      <Grid>
        <VisitorsList />
      </Grid>
    </Container>
  );
}
