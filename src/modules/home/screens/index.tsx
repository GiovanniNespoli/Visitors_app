import Header from "../../../components/Header";
import VisitorsList from "../components/VisitorsList";

import { Container, Grid, VisitorFilterContainer } from "./styles";
import { useWindowDimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button, IconButton } from "native-base";
import theme from "../../../styles/theme";
import Subtitle from "../../../components/Subtitle";
import DatePicker from "../components/DatePicker";
import { useEffect, useState } from "react";
import { IListVisitorData } from "../../visitors/interfaces/IVisitorData";
import { useQuery } from "@tanstack/react-query";
import { GetVisitors } from "../../visitors/api";

export default function Home({ navigation }) {
  const windowHeight = useWindowDimensions().height;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [visitors, setVisitors] = useState<IListVisitorData[]>([]);
  const [allVisitors, setAllVisitors] = useState<boolean>(false);

  const { data } = useQuery({
    queryKey: ["GETVISITORS", allVisitors],
    queryFn: GetVisitors,
    enabled: allVisitors === true,
  });

  useEffect(() => {
    if (data) return setVisitors(data);
  }, [data]);

  useEffect(() => {
    console.log("selected", visitors);
  }, [visitors]);

  return (
    <Container style={[{ minHeight: Math.round(windowHeight) }]}>
      <DatePicker
        show={openModal}
        closeModal={(value) => setOpenModal(value)}
        selectData={(data) => {
          setVisitors(data);
        }}
      />
      <IconButton
        variant="solid"
        width={"50px"}
        height={"50px"}
        position={"absolute"}
        zIndex={1}
        bottom={10}
        left={10}
        backgroundColor={theme.green}
        borderRadius={50}
        onPress={() => navigation.navigate("Teste")}
        _icon={{
          as: Entypo,
          name: "plus",
          size: 8,
        }}
      />
      <Header />
      <Grid>
        <Subtitle title="Lista de visitantes" iconName="list-ul" />
        <VisitorFilterContainer>
          <Button
            width={"45%"}
            height={"65px"}
            variant="outline"
            colorScheme="blue"
            borderColor={"blue.400"}
            borderWidth={3}
            borderRadius={10}
            onPress={() => {
              setAllVisitors(false);
              setOpenModal(true);
            }}
          >
            Filtrar por data
          </Button>
          <Button
            width={"45%"}
            height={"65px"}
            variant="outline"
            colorScheme="blue"
            borderColor={"blue.400"}
            borderWidth={3}
            borderRadius={10}
            onPress={() => {
              setAllVisitors(true);
            }}
          >
            Todos os visitantes
          </Button>
        </VisitorFilterContainer>
        <VisitorsList data={visitors} />
      </Grid>
    </Container>
  );
}
