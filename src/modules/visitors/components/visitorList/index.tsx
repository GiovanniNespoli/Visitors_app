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
}

export default function VisitorList({ date, name, phone }: IVistorListData) {
  return (
    <Container>
      <Grid>
        <InformationContent>
          <VisitorName>{name}</VisitorName>
          <VisitorPhone>{phone}</VisitorPhone>
        </InformationContent>
        <DateContent>
          <VisitorDate>{date}</VisitorDate>
        </DateContent>
      </Grid>
    </Container>
  );
}
