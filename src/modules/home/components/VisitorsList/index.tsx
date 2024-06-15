import { Container, VisitorListContainer, Warning } from "./styles";
import { IListVisitorData } from "../../../visitors/interfaces/IVisitorData";
import { FlatList } from "react-native";
import StyledFlatList from "../../../../components/StyledFlatList";
import VisitorModal from "../VisitorModal";
import { useState } from "react";

interface IVisitorsListProps {
  data: IListVisitorData[];
}

export default function VisitorsList({ data }: IVisitorsListProps) {
  const [visitor, setVisitor] = useState<IListVisitorData>();
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <VisitorModal
        closeModal={setShowModal}
        show={showModal}
        visitor={visitor}
      />
      <VisitorListContainer>
        {data ? (
          data.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item, index }) => (
                <>
                  <StyledFlatList
                    visitor={{
                      data: data,
                      index: index,
                      id: item.id,
                      name: item.name,
                      email: item.email,
                      phone: item.phone,
                    }}
                    setOpenModal={(open: boolean) => {
                      setShowModal(open);
                    }}
                    setVisitorData={setVisitor}
                  />
                </>
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
