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
  FilterButtonContent,
  MaskedTextInputStyled,
} from "./styles";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import DeleteButton from "../../components/deleteButton";
import { useVisitor } from "../../hooks";
import { IListVisitorData } from "../../interfaces/IVisitorData";
import moment from "moment";

export default function ListVisitors() {
  const { listVisitor, list, removeVisitor } = useVisitor();

  const [selectedVisitorIndex, setSelectedVisitorIndex] = useState(0);
  const [data, setData] = useState<IListVisitorData[]>(
    ({} as IListVisitorData[]) || undefined
  );
  const [selectedVisitor, setSelectedVisitor] = useState<IListVisitorData>(
    {} as IListVisitorData
  );
  const [filterName, setFilterName] = useState<string>("");
  const [filterDate, setFilterDate] = useState<string>("");

  useLayoutEffect(() => {
    list();
  }, [list]);

  useEffect(() => {
    setData(listVisitor);
  }, [list, listVisitor]);

  const selectVistorHandle = useCallback(
    ({ id, createdAt, email, updatedAt, name, phone }: IListVisitorData) => {
      setSelectedVisitorIndex(selectedVisitorIndex === id ? 0 : id);

      setSelectedVisitor({
        id,
        createdAt,
        updatedAt,
        name,
        phone,
        email,
      });
    },
    [selectedVisitorIndex]
  );

  const filterItems = useCallback(() => {
    if (filterName && filterDate) {
      const filterData = data.filter((value) => {
        return (
          moment(value.createdAt).format("DD/MM/YYYY") === filterDate &&
          value.name === filterName
        );
      });

      return setData(filterData);
    }
  }, [filterName, filterDate]);

  const removeItem = useCallback(
    (id: number) => {
      setSelectedVisitorIndex(0);
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
            <MaskedTextInputStyled
              mask="AAAAAAAAAAAAAAAAAAAAA"
              placeholder="Nome"
              keyboardType="default"
              value={filterName}
              onChangeText={(value) => {
                setFilterName(value);
              }}
            />
            <MaskedTextInputStyled
              mask="99/99/9999"
              keyboardType="number-pad"
              placeholder="Data"
              value={filterDate}
              onChangeText={(value) => {
                setFilterDate(value);
              }}
            />
          </FilterContent>
          <FilterButtonContent>
            <FilterButton
              disableColor={false}
              onPress={() => {
                filterItems();
              }}
            >
              <FilterText>Filtrar</FilterText>
            </FilterButton>
            <FilterButton
              disableColor={filterName.length === 0 && filterDate.length === 0}
              onPress={() => {
                setData(listVisitor);
                setFilterDate("");
                setFilterName("");
              }}
              disabled={filterName.length === 0 && filterDate.length === 0}
            >
              <FilterText>Limpar campos</FilterText>
            </FilterButton>
          </FilterButtonContent>
        </FilterContainer>
        <ListContainer>
          <ListHeader>Informações</ListHeader>
          <List>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <VisitorList
                  date={moment(item.createdAt).format("DD/MM/YYYY - ddd")}
                  name={item.name}
                  phone={item.phone}
                  key={item.id}
                  enable={selectedVisitorIndex === item.id}
                  onPress={() => {
                    selectVistorHandle(item);
                  }}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </List>
          <DeleteButton
            onPress={() => {
              removeItem(selectedVisitor.id);
              removeVisitor(selectedVisitor.id);
            }}
            disabled={selectedVisitorIndex === 0}
          />
        </ListContainer>
      </Container>
    </Background>
  );
}
