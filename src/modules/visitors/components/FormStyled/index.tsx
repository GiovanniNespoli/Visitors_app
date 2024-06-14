import { Controller, useForm } from "react-hook-form";
import { View } from "react-native";
import { Container, FormContent } from "./styles";
import { Icon, Button } from "native-base";
import { useMutation } from "@tanstack/react-query";
import { CreateVisitors } from "../../api";
import { queryClient } from "../../../../service/api";
import { ICreateVisitorData } from "../../interfaces/IVisitorData";
import StyledAlert from "../../../../components/StyledAlert";
import { useState } from "react";
import { IAlertStatusEnum } from "../../../../interface/IAlertEnum";
import MaskedInput from "../InputStyled/MaskedInput";
import Input from "../InputStyled/Input";

export default function FormStyled() {
  const create = useMutation({
    mutationFn: CreateVisitors,
    onMutate: async () => {
      console.log("mandando...");

      setOpenAlert(false);
    },
    onSuccess: async () => {
      console.log("foi!!");

      await queryClient.invalidateQueries({
        queryKey: ["GETPERDAYVISITORS"],
      });
      await queryClient.invalidateQueries({
        queryKey: ["GETVISITORS"],
      });

      setOpenAlert(true);
    },
    onError: async () => {
      console.log("não foi!!");
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const onSubmit = async (data: ICreateVisitorData) => {
    await create.mutateAsync(data);
    reset();
  };

  return (
    <Container>
      {create.isError ? (
        <StyledAlert
          header="Visitante cadastrado!"
          status={IAlertStatusEnum.error}
          text="O cadastro do visitante foi realizado com sucesso!"
          openAlert={openAlert}
        />
      ) : (
        <></>
      )}
      {create.isSuccess ? (
        <StyledAlert
          header="Visitante cadastrado!"
          status={IAlertStatusEnum.success}
          text="O cadastro do visitante foi realizado com sucesso!"
          openAlert={openAlert}
        />
      ) : (
        <></>
      )}
      <FormContent>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Nome"
              />
            )}
            name="name"
          />
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                placeholder="email"
              />
            )}
            name="email"
          />
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <MaskedInput
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                placeholder={"Telefone"}
              />
            )}
            name="phone"
          />
        </View>

        <Button
          height={12}
          borderRadius="full"
          colorScheme="success"
          onPress={handleSubmit(onSubmit)}
        >
          Cadastrar
        </Button>
      </FormContent>
    </Container>
  );
}
