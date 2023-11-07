import { FlatList } from "react-native-gesture-handler";
import Background from "../../../../components/background";
import VisitorList from "../../components/visitorList";
import {
  FilterContainer,
  FilterContent,
  FilterButton,
  FilterText,
  ListContainer,
  Container,
  ListHeader,
  List,
  DeleteButton,
  DeleteButtonContainer,
  DeleteText,
} from "./styles";
import { dummyData } from "../../../../../dummyData";
import { Shadow } from "react-native-shadow-2";
import theme from "../../../../styles/theme";
import FilterInput from "../../components/filterInput";

export default function ListVisitors() {
  return (
    <Background iconName="book" title="Lista" subTitle="lista de visitantes">
      <Container>
        <FilterContainer>
          <FilterContent>
            <FilterInput placeholder="Nome" type="default" />
            <FilterInput placeholder="Data" type="number-pad" />
          </FilterContent>
          <FilterButton>
            <FilterText>Filtrar</FilterText>
          </FilterButton>
        </FilterContainer>
        <ListContainer>
          <ListHeader>Informações</ListHeader>
          <List>
            <FlatList
              data={dummyData}
              renderItem={({ item }) => (
                <VisitorList
                  date={item.date}
                  name={item.name}
                  phone={item.phone}
                  key={item.id}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </List>
          <DeleteButtonContainer>
            <Shadow
              style={{ height: 45, width: 150, borderRadius: 7 }}
              distance={5}
              startColor={theme.deleteButton.disable}
              offset={[0, 3]}
            >
              <DeleteButton disabled>
                <DeleteText>Excluir</DeleteText>
              </DeleteButton>
            </Shadow>
          </DeleteButtonContainer>
        </ListContainer>
      </Container>
    </Background>
  );
}
