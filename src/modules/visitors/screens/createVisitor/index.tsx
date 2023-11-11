import { useState } from "react";
import Background from "../../../../components/background";
import SubmitButton from "../../../../components/submitButton";
import Input from "../../components/input";
import { useVisitor } from "../../hooks";
import { Container, Line } from "./styles";

export default function CreateVisior() {
  const { createVisitor } = useVisitor();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Background
      iconName="user-plus"
      subTitle="cadastrar novo visitante"
      title="cadastro"
    >
      <Container>
        <Input
          inputText={(value) => {
            setName(value);
          }}
          name="nome"
        />
        <Input
          masked
          inputText={(value) => {
            setPhone(value);
          }}
          name="telefone"
        />
        <Input
          inputText={(value) => {
            setEmail(value);
          }}
          name="email"
        />
        <Line></Line>
        <SubmitButton
          buttonText="cadastrar"
          onPress={() => {
            console.warn(name, email, phone);

            createVisitor({ name, email, phone });
          }}
        ></SubmitButton>
      </Container>
    </Background>
  );
}
