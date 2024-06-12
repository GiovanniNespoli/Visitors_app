import { Container, VisitorListContainer, Warning } from "./styles";
import { IListVisitorData } from "../../../visitors/interfaces/IVisitorData";
import { FlatList } from "react-native";
import StyledFlatList from "../../../../components/StyledFlatList";

interface IVisitorsListProps {
  data: IListVisitorData[];
}

export default function VisitorsList({ data }: IVisitorsListProps) {
  return (
    <Container>
      <VisitorListContainer>
        {data ? (
          data.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item, index }) => (
                <StyledFlatList
                  data={data}
                  index={index}
                  id={item.id}
                  name={item.name}
                  email={item.email}
                  phone={item.phone}
                />
              )}
            />
          ) : (
            <Warning>Não há registros de visitantes no dia selecionado</Warning>
          )
        ) : (
          <></>
        )}
      </VisitorListContainer>
    </Container>
  );
}
