import { useState } from "react";
import Background from "../../../../components/background";
import SubmitButton from "../../../../components/submitButton";
import Input from "../../components/input";
import { useVisitor } from "../../hooks";
import { Container, Grid, Line } from "./styles";
import Header from "../../../../components/Header";
import FormStyled from "../../components/Form";
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
