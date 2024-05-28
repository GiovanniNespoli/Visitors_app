import { Modal, Button } from "native-base";
import DateTimePicker from "react-native-ui-datepicker";
import { useEffect, useState } from "react";

interface IFilterModalProps {
  show: boolean;
  setSelectedDayOff: boolean;
  closeModal: (value: boolean) => void;
  selectedDate: (day: Date) => void;
}

export default function FilterModal({
  show,
  closeModal,
  selectedDate,
  setSelectedDayOff,
}: IFilterModalProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    if (date) selectedDate(date);
  }, [date]);

  useEffect(() => {
    if (setSelectedDayOff) setDate(undefined);
  }, [setSelectedDayOff]);

  return (
    <Modal isOpen={show} onClose={() => closeModal(false)}>
      <Modal.Content maxWidth="500px">
        <Modal.Body>
          <DateTimePicker
            locale={"br"}
            mode="single"
            date={date}
            displayFullDays
            onChange={(params) => {
              setDate(params.date);
            }}
          />
        </Modal.Body>
        <Modal.Footer justifyContent={"space-between"}>
          <Button
            variant="solid"
            colorScheme="red"
            onPress={() => {
              setDate(new Date());
            }}
          >
            Limpar dia
          </Button>
          <Button
            variant="ghost"
            colorScheme="blueGray"
            onPress={() => {
              closeModal(false);
            }}
          >
            Voltar
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
