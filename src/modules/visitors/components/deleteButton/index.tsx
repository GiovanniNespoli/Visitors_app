import { Shadow } from "react-native-shadow-2";
import { Delete, DeleteButtonContainer, DeleteText } from "./styles";
import theme from "../../../../styles/theme";
import { useEffect } from "react";

interface IDeleteButtonProps {
  disabled: boolean;
  onPress(): void;
}

export default function DeleteButton({
  disabled,
  onPress,
}: IDeleteButtonProps) {
  return (
    <DeleteButtonContainer>
      <Shadow
        style={{ height: 45, width: 150, borderRadius: 7 }}
        distance={5}
        startColor={
          disabled ? theme.deleteButton.disable : theme.deleteButton.enabled
        }
        offset={[0, 3]}
      >
        <Delete onPress={onPress} disabled={disabled}>
          <DeleteText disabled={disabled}>Excluir</DeleteText>
        </Delete>
      </Shadow>
    </DeleteButtonContainer>
  );
}
