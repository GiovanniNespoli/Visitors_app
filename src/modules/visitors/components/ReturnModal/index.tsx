import { FormControl, Input, Modal, Button } from "native-base";
import { useEffect, useState } from "react";

interface IReturnModal {
  openModal: boolean;
}

export default function ReturnModal({ openModal }: IReturnModal) {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(openModal);
  }, [showModal, openModal]);

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
