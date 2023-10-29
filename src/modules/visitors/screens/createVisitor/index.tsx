import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Background from "../../../../components/background";
import Input from "../../components/input";

export default function CreateVisior() {
  return (
    <Background subTitle="cadastrar novo visitante" title="cadastro">
      <Input name="nome" />
      <Input name="telefone" />
      <Input name="email" />
    </Background>
  );
}
