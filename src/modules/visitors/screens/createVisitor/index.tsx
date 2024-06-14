import { Container, Grid } from "./styles";
import Header from "../../../../components/Header";
import FormStyled from "../../components/FormStyled";
import { useWindowDimensions } from "react-native";
import Subtitle from "../../../../components/Subtitle";

export default function CreateVisitor() {
  const windowHeight = useWindowDimensions().height;

  return (
    <Container style={[{ minHeight: Math.round(windowHeight) }]}>
      <Header />
      <Grid>
        <Subtitle goBack iconName="user" title="Novo visitante" />
        <FormStyled />
      </Grid>
    </Container>
  );
}
