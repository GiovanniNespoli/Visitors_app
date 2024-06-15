import { Button, Divider, Modal } from "native-base";
import { IListVisitorData } from "../../../visitors/interfaces/IVisitorData";
import { Label, LabelContent } from "./styles";
import { useMutation } from "@tanstack/react-query";
import { DeleteVisitor } from "../../api";
import { queryClient } from "../../../../service/api";
import { useState } from "react";
import StyledAlert from "../../../../components/StyledAlert";
import { IAlertStatusEnum } from "../../../../interface/IAlertEnum";

interface IVisitorModalProps {
  show: boolean;
  visitor?: IListVisitorData;
  closeModal: (close: boolean) => void;
}

export default function VisitorModal({
  show,
  visitor,
  closeModal,
}: IVisitorModalProps) {
  const remove = useMutation({
    mutationFn: DeleteVisitor,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["GETPERDAYVISITORS"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["GETVISITORS"],
      });
      closeModal(false);
    },
  });

  return (
    <Modal isOpen={show} onClose={() => closeModal(false)}>
      <Modal.Content maxWidth="500px">
        <Modal.CloseButton />
        <Modal.Header marginBottom={-5}>Informação do usuário</Modal.Header>
        <Modal.Body>
          <LabelContent>
            <Label>{visitor?.name}</Label>
            <Divider />
          </LabelContent>
          <LabelContent>
            <Label>{visitor?.email}</Label>
            <Divider />
          </LabelContent>
          <LabelContent>
            <Label>{visitor?.phone}</Label>
            <Divider />
          </LabelContent>
          <Button
            marginTop={"8"}
            margin={"auto"}
            width={"50%"}
            colorScheme={"red"}
            size="sm"
            onPress={() => {
              if (visitor?.id) remove.mutateAsync(visitor.id);
            }}
          >
            Excluir
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
