import {
  Container,
  DateContent,
  Grid,
  InformationContent,
  VisitorDate,
  VisitorName,
  VisitorPhone,
} from "./styles";

interface IVistorListData {
  name: string;
  phone: string;
  date: string;
  onPress(): void;
  enable: boolean;
}

export default function VisitorList({
  date,
  name,
  phone,
  onPress,
  enable,
}: IVistorListData) {
  return (
    <Container
      onPress={() => {
        onPress();
      }}
      enable={enable}
    >
      <Grid>
        <InformationContent>
          <VisitorName enable={enable}>{name}</VisitorName>
          <VisitorPhone enable={enable}>{phone}</VisitorPhone>
        </InformationContent>
        <DateContent>
          <VisitorDate enable={enable}>{date}</VisitorDate>
        </DateContent>
      </Grid>
    </Container>
  );
}
