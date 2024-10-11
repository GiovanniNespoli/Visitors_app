import { Container, VisitorListContainer, Warning } from "./styles";
import {
  IAllVisitorsData,
  IListVisitorData,
} from "../../../visitors/interfaces/IVisitorData";
import { FlatList } from "react-native";
import StyledFlatList from "../../../../components/StyledFlatList";
import VisitorModal from "../VisitorModal";
import { useState } from "react";

interface IVisitorsListProps {
  data: IAllVisitorsData[];
}

export default function VisitorsList({ data }: IVisitorsListProps) {
  const [visitor, setVisitor] = useState<IAllVisitorsData>();
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      {/* <VisitorModal
        closeModal={setShowModal}
        show={showModal}
        visitor={visitor}
      /> */}
      <VisitorListContainer>
        {data ? (
          data.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item, index }) => (
                <>
                  {item.visitors.forEach((a) => (
                    <StyledFlatList
                      index={index}
                      visitor={{
                        id: a.id,
                        church: a.church,
                        createdAt: a.createdAt,
                        name: a.name,
                        observation: a.observation,
                        updatedAt: a.updatedAt,
                        phone: a.phone,
                      }}
                      setOpenModal={(open: boolean) => {
                        setShowModal(open);
                      }}
                      setVisitorData={function (
                        visitor: IListVisitorData
                      ): void {
                        throw new Error("Function not implemented.");
                      }} // setVisitorData={setVisitor}
                    />
                  ))}

                  {item.churchs.forEach((a) => (
                    <StyledFlatList
                      index={index}
                      church={{
                        createdAt: a.createdAt,
                        id: a.id,
                        label: a.label,
                        number: a.number,
                        updatedAt: a.updatedAt,
                      }}
                      setOpenModal={(open: boolean) => {
                        setShowModal(open);
                      }}
                      setVisitorData={function (
                        visitor: IListVisitorData
                      ): void {
                        throw new Error("Function not implemented.");
                      }} // setVisitorData={setVisitor}
                    />
                  ))}
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
