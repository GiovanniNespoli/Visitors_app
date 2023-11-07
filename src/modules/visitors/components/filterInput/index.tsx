import { Container } from "./styles";

interface IFilterInput {
  placeholder: string;
  type: "default" | "number-pad";
}

export default function FilterInput({ placeholder, type }: IFilterInput) {
  return <Container placeholder={placeholder} keyboardType={type}></Container>;
}
