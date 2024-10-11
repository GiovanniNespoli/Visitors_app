import React, { useEffect } from "react";
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
  IListVisitorData,
  IChurchData,
} from "../../modules/visitors/interfaces/IVisitorData";

interface IStyledFlatList {
  index: number;
  visitor?: IListVisitorData[];
  church?: IChurchData[];
  setOpenModal: (open: boolean) => void;
  setVisitorData: (visitor: IListVisitorData) => void;
}

export default function StyledFlatList({
  index,
  setOpenModal,
  setVisitorData,
  visitor,
  church,
}: IStyledFlatList) {
  return (
    <ListContainer lastItem={index === visitor?.length - 1}>
      <VisitorInformationContainer>
        {/* <VisitorInformation>
          <Feather
            style={{ marginLeft: 10, marginRight: 10 }}
            name="user"
            size={24}
            color="black"
          />
          <Text>{visitor ? visitor.name : church?.label}</Text>
        </VisitorInformation> */}
        {/* <VisitorInformation>
          <Fontisto
            style={{ marginLeft: 10, marginRight: 10 }}
            name="email"
            size={24}
            color="black"
          />
          <Text>{church.length ? church : "Email não informado"}</Text>
        </VisitorInformation>
        <VisitorInformation>
          <Feather
            style={{ marginLeft: 10, marginRight: 10 }}
            name="phone"
            size={24}
            color="black"
          />
          <Text>{phone?.length ? phone : "Telefone não informado"}</Text>
        </VisitorInformation> */}
      </VisitorInformationContainer>
      <OptionsContainer>
        <ExtraOptionsButton
          onPress={() => {
            // setVisitorData({
            //   church,
            //   id,
            //   name,
            //   phone,
            //   createdAt: new Date(),
            //   updatedAt: new Date(),
            //   observation: "",
            // });
            setOpenModal(true);
          }}
        >
          <Entypo name="dots-three-horizontal" size={24} color="white" />
        </ExtraOptionsButton>
      </OptionsContainer>
    </ListContainer>
  );
}
