import { Controller, Form, useForm } from "react-hook-form";
import { View } from "react-native";
import { Container, ErrorText, FormContent } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Input, Icon, Button } from "native-base";
import Subtitle from "../../../../components/Subtitle";
import theme from "../../../../styles/theme";
import { useMutation } from "@tanstack/react-query";
import { CreateVisitors } from "../../api";
import { queryClient } from "../../../../service/api";
import { ICreateVisitorData } from "../../interfaces/IVisitorData";
import ReturnModal from "../ReturnModal";

export default function FormStyled() {
  

  const create = useMutation({
    mutationFn: CreateVisitors,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["GETVISITORS"] });
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  const onSubmit = async (data: ICreateVisitorData) => {
    create.mutate(data);
  };

  return (
    <Container>
      <ReturnModal openModal={false} />
      <Subtitle iconName="user" title="Novo visitante" />
      <FormContent>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                w={{
                  base: "100%",
                  md: "25%",
                }}
                borderRadius={10}
                backgroundColor={theme.white}
                borderWidth={2}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Name"
              />
            )}
            name="name"
          />
          {errors.name && <ErrorText>O campo está vazio</ErrorText>}
        </View>

        <View>
          <Controller
            control={control}
            rules={{
              maxLength: 100,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                w={{
                  base: "100%",
                  md: "25%",
                }}
                borderRadius={10}
                backgroundColor={theme.white}
                borderWidth={2}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="email" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
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
              <Input
                w={{
                  base: "100%",
                  md: "25%",
                }}
                borderRadius={10}
                backgroundColor={theme.white}
                borderWidth={2}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="phone" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Telefone"
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
