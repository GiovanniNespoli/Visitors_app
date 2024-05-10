import { Controller, Form, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import { Container, FormContent } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Input, Icon } from "native-base";
import Subtitle from "../../../../components/Subtitle";

export default function FormStyled() {
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
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Subtitle iconName="user" title="Novo visitante" />
      <FormContent>
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
        {errors.name && <Text>This is required.</Text>}

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

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </FormContent>
    </Container>
  );
}
