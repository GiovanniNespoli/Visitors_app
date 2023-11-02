import Background from "../../../../components/background";
import SubmitButton from "../../../../components/submitButton";
import Input from "../../components/input";
import { Container, Line } from "./styles";
import Toast from "react-native-toast-message";

export default function CreateVisior() {
  const showToast = () => {
    Toast.show({
      type: "success",
      text1: "Sucesso",
      text2: "Cadastro realizado com sucesso ✅",
    });
  };
  return (
    <Background
      iconName="user-plus"
      subTitle="cadastrar novo visitante"
      title="cadastro"
    >
      <Container>
        <Input name="nome" />
        <Input name="telefone" />
        <Input name="email" />
        <Line></Line>
        <SubmitButton
          buttonText="cadastrar"
          onPress={() => {
            showToast();
          }}
        ></SubmitButton>
      </Container>
    </Background>
  );
}
