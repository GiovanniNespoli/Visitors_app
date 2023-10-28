import { useEffect, useState } from "react";
import { Modal } from "react-native";
import {
  ModalBackground,
  ModalButton,
  ModalButtonContent,
  ModalContent,
  ModalTextButton,
  ModalTitle,
} from "./styles";
import theme from "../../../../styles/theme";

interface IModalProps {
  openModal: boolean;
  closeModal: () => void;
  onNavigate: () => void;
}

export default function DreamsModal({
  openModal,
  onNavigate,
  closeModal,
}: IModalProps) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(openModal);
  }, [openModal]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}
      onRequestClose={() => {
        setModalVisible(!openModal);
      }}
    >
      <ModalBackground>
        <ModalContent>
          <ModalTitle>Sonho cadastrado !</ModalTitle>
          <ModalButtonContent>
            <ModalButton onPress={closeModal} borderColor={theme.borderBlue}>
              <ModalTextButton>Cadastrar outro sonho</ModalTextButton>
            </ModalButton>
            <ModalButton onPress={onNavigate} borderColor={theme.borderGreen}>
              <ModalTextButton>Ver tabela de sonhos</ModalTextButton>
            </ModalButton>
          </ModalButtonContent>
        </ModalContent>
      </ModalBackground>
    </Modal>
  );
}
