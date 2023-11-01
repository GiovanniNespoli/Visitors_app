import Background from "../../../../components/background";
import SubmitButton from "../../../../components/submitButton";
import Input from "../../components/input";
import { Container, Line } from "./styles";

export default function CreateVisior() {
  return (
    <Background subTitle="cadastrar novo visitante" title="cadastro">
      <Container>
        <Input name="nome" />
        <Input name="telefone" />
        <Input name="email" />
        <Line></Line>
        <SubmitButton buttonText="cadastrar" onPress={() => {}}></SubmitButton>
      </Container>
    </Background>
  );
}
