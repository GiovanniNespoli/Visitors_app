import { Icon, Input } from "native-base";
import {
  Container,
  ExtraOptionsButton,
  ListContainer,
  ListTitle,
  OptionsContainer,
  VisitorFilterContainer,
  VisitorHeaderContainer,
  VisitorInformation,
  VisitorInformationContainer,
  VisitorListContainer,
} from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FlatList, Text } from "react-native";
import theme from "../../../../styles/theme";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useVisitor } from "../../../visitors/hooks";
import { useLayoutEffect } from "react";
import { IListVisitorData } from "../../../visitors/interfaces/IVisitorData";

const DATA = [
  {
    id: "1",
    name: "First Item",
    email: "ggnespoli@gmail.com",
    phone: "(11) 95868-1449",
  },
];

export default function VisitorsList() {
  const { list, listVisitor } = useVisitor();

  useLayoutEffect(() => {
    list();
  }, [list]);

  const VisitorListStyled = ({ id, email, name, phone }: IListVisitorData) => (
    <ListContainer>
      <VisitorInformationContainer>
        <VisitorInformation>
          <Feather
            style={{ marginLeft: 10, marginRight: 10 }}
            name="user"
            size={24}
            color="black"
          />
          <Text>{name}</Text>
        </VisitorInformation>
        <VisitorInformation>
          <Fontisto
            style={{ marginLeft: 10, marginRight: 10 }}
            name="email"
            size={24}
            color="black"
          />
          <Text>{email}</Text>
        </VisitorInformation>
        <VisitorInformation>
          <Feather
            style={{ marginLeft: 10, marginRight: 10 }}
            name="phone"
            size={24}
            color="black"
          />
          <Text>{phone}</Text>
        </VisitorInformation>
      </VisitorInformationContainer>
      <OptionsContainer>
        <ExtraOptionsButton onPress={() => {}}>
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </ExtraOptionsButton>
      </OptionsContainer>
    </ListContainer>
  );

  return (
    <Container>
      <VisitorHeaderContainer>
        <FontAwesome5 name="list-ul" size={24} color="black" />
        <ListTitle>Lista de visitantes (08/05)</ListTitle>
      </VisitorHeaderContainer>
      <VisitorFilterContainer>
        <Input
          w={{
            base: "100%",
            md: "25%",
          }}
          borderRadius={10}
          backgroundColor={theme.white}
          borderWidth={2}
          InputLeftElement={
            <Icon
              as={<FontAwesome name="search" size={24} color="black" />}
              size={5}
              ml="2"
              color="muted.400"
            />
          }
          placeholder="Pesquisar pelo nome"
        />
      </VisitorFilterContainer>
      <VisitorListContainer>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={listVisitor}
          renderItem={({ item }) => (
            <VisitorListStyled
              id={item.id}
              name={item.name}
              email={item.email}
              phone={item.phone}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
            />
          )}
        />
      </VisitorListContainer>
    </Container>
  );
}
