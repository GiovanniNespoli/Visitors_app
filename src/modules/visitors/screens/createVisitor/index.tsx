import { Container, Grid, Line } from "./styles";
import Header from "../../../../components/Header";
import FormStyled from "../../components/FormStyled";
import { useWindowDimensions } from "react-native";

export default function CreateVisitor() {
  const windowHeight = useWindowDimensions().height;

  return (
    <Container style={[{ minHeight: Math.round(windowHeight) }]}>
      <Header />
      <Grid>
        <FormStyled />
      </Grid>
    </Container>
  );
}
