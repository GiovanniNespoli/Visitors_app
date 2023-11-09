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
} from "./styles";
import { dummyData } from "../../../../../dummyData";
import FilterInput from "../../components/filterInput";
import { useCallback, useEffect, useState } from "react";
import DeleteButton from "../../components/deleteButton";

interface IItemData {
  id: string;
  name: string;
  phone: string;
  date: string;
}

export default function ListVisitors() {
  const [selectedVisitorIndex, setSelectedVisitorIndex] = useState(0);
  const [data, setData] = useState(dummyData || undefined);
  const [selectedVisitor, setSelectedVisitor] = useState<IItemData>(
    {} as IItemData
  );
  const [filterName, setFilterName] = useState<string>("");
  const [filterDate, setFilterDate] = useState<string>("");

  const selectVistorHandle = useCallback(
    ({ id, date, name, phone }: IItemData) => {
      setSelectedVisitorIndex(
        selectedVisitorIndex === parseInt(id) ? 0 : parseInt(id)
      );

      setSelectedVisitor({
        id,
        date,
        name,
        phone,
      });
    },
    [selectedVisitorIndex]
  );

  const filterItems = useCallback(() => {
    

    if (filterName && filterDate) {
      const filterData = data.filter(
        (value) => value.date === filterDate && value.name === filterName
      );

      console.log(filterData);

      return setData(filterData);
    }
  }, [filterName, filterDate]);

  const removeItem = useCallback(
    (id: string) => {
      const removeItemIndex = data.filter((value) => value.id !== id);

      return setData(removeItemIndex);
    },
    [data]
  );

  return (
    <Background iconName="book" title="Lista" subTitle="lista de visitantes">
      <Container>
        <FilterContainer>
          <FilterContent>
            <FilterInput
              mask="AAAAAAAAAAAAAAAAAAAAA"
              placeholder="Nome"
              type="default"
              onSendText={(value) => {
                setFilterName(value);
              }}
            />
            <FilterInput
              mask="99/99/9999"
              placeholder="Data"
              type="number-pad"
              onSendText={(value) => {
                setFilterDate(value);
              }}
            />
          </FilterContent>
          <FilterButton
            onPress={() => {
              filterItems();
            }}
          >
            <FilterText>Filtrar</FilterText>
          </FilterButton>
        </FilterContainer>
        <ListContainer>
          <ListHeader>Informações</ListHeader>
          <List>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <VisitorList
                  date={item.date}
                  name={item.name}
                  phone={item.phone}
                  key={item.id}
                  enable={selectedVisitorIndex === parseInt(item.id)}
                  onPress={() => {
                    selectVistorHandle(item);
                  }}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </List>
          <DeleteButton
            onPress={() => {
              removeItem(selectedVisitor.id);
            }}
            disabled={selectedVisitorIndex === 0}
          />
        </ListContainer>
      </Container>
    </Background>
  );
}
