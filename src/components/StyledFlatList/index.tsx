import React from "react";
import { Text } from "react-native";
import { Feather, Fontisto, Entypo } from "@expo/vector-icons";
import {
  ListContainer,
  VisitorInformationContainer,
  VisitorInformation,
  OptionsContainer,
  ExtraOptionsButton,
} from "./styles";
import {
  IFlatListVisitorData,
  IListVisitorData,
} from "../../modules/visitors/interfaces/IVisitorData";

export default function StyledFlatList({
  index,
  email,
  name,
  phone,
  data
}: IFlatListVisitorData) {
  return (
    <ListContainer lastItem={index === data?.length - 1}>
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
}
