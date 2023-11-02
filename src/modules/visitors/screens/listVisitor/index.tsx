import Background from "../../../../components/background";
import {
  FilterContainer,
  FilterContent,
  FilterButton,
  FilterText,
  ListContainer,
  Container,
} from "./styles";

export default function ListVisitors() {
  return (
    <Background iconName="book" title="Lista" subTitle="lista de visitantes">
      <Container>
        <FilterContainer>
          <FilterContent></FilterContent>
          <FilterButton>
            <FilterText>Filtrar</FilterText>
          </FilterButton>
        </FilterContainer>
        <ListContainer></ListContainer>
      </Container>
    </Background>
  );
}
