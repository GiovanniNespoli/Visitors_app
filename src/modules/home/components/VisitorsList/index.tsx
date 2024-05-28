import { Button } from "native-base";
import {
  Container,
  VisitorFilterContainer,
  VisitorListContainer,
} from "./styles";
import Subtitle from "../../../../components/Subtitle";
import FilterModal from "../FilterModal";
import AllVisitants from "../AllVisitants";
import { useState } from "react";
import VisitantsPerDay from "../VisitantsPerDay";

export default function VisitorsList() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [filterDate, setFilterDate] = useState<Date>(new Date());
  const [allVisitants, setAllVisitants] = useState<boolean>(false);
  const [selectedDayOff, setSelectedDayOff] = useState<boolean>(false);

  return (
    <Container>
      <FilterModal
        selectedDate={(value) => {
          setAllVisitants(false);
          setFilterDate(value);
          setSelectedDayOff(false);
        }}
        setSelectedDayOff={selectedDayOff}
        show={openModal}
        closeModal={(value) => setOpenModal(value)}
      />
      <Subtitle title="Lista de visitantes" iconName="list-ul" />
      <VisitorFilterContainer>
        <Button
          width={"45%"}
          height={"65px"}
          variant="outline"
          colorScheme="blue"
          borderColor={"blue.400"}
          borderWidth={3}
          borderRadius={10}
          onPress={() => {
            setOpenModal(true);
          }}
        >
          Filtrar por data
        </Button>
        <Button
          width={"45%"}
          height={"65px"}
          variant="outline"
          colorScheme="blue"
          borderColor={"blue.400"}
          borderWidth={3}
          borderRadius={10}
          onPress={() => {
            setAllVisitants(true);
            setSelectedDayOff(true);
          }}
        >
          Todos os visitantes
        </Button>
      </VisitorFilterContainer>
      <VisitorListContainer>
        {allVisitants ? <AllVisitants /> : <VisitantsPerDay day={filterDate} />}
      </VisitorListContainer>
    </Container>
  );
}
