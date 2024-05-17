import { HStack, Icon, Input, Spinner } from "native-base";
import {
  Container,
  ExtraOptionsButton,
  ListContainer,
  OptionsContainer,
  VisitorFilterContainer,
  VisitorInformation,
  VisitorInformationContainer,
  VisitorListContainer,
} from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FlatList, Text } from "react-native";
import theme from "../../../../styles/theme";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { IListVisitorData } from "../../../visitors/interfaces/IVisitorData";
import Subtitle from "../../../../components/Subtitle";
import { useQuery } from "@tanstack/react-query";
import { GetVisitors } from "../../../visitors/api";

export default function VisitorsList() {
  const { data, isLoading } = useQuery({
    queryKey: ["GETVISITORS"],
    queryFn: GetVisitors,
  });

  const LoadingData = () => {
    return (
      <HStack justifyContent="center" alignItems="center">
        <Spinner size="lg" />
      </HStack>
    );
  };

  const VisitorListStyled = ({ email, name, phone }: IListVisitorData) => (
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
      <Subtitle title="Lista de visitantes" iconName="list-ul" />
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
        {isLoading ? (
          <LoadingData />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
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
        )}
      </VisitorListContainer>
    </Container>
  );
}
