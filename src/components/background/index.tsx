import { ReactNode } from "react";
import {
  ButtonNavigationContent,
  Container,
  Grid,
  Header,
  Icon,
  NavigationContainer,
  SubTitle,
  SubTitleContainer,
  TitleText,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import theme from "../../styles/theme";

interface IBackgroundProps {
  children: ReactNode;
  title: string;
  subTitle: string;
}

export default function Background({
  children,
  subTitle,
  title,
}: IBackgroundProps) {
  return (
    <Container>
      <Header>
        <Grid>
          <NavigationContainer>
            <ButtonNavigationContent>
              <MaterialIcons name="menu" size={36} color={theme.white} />
            </ButtonNavigationContent>
            <TitleText>{title}</TitleText>
            <ButtonNavigationContent />
          </NavigationContainer>
          <SubTitleContainer>
            <SubTitle>{subTitle}</SubTitle>
            <Icon>
              <Feather name="user-plus" size={65} color={theme.white} />
            </Icon>
          </SubTitleContainer>
        </Grid>
      </Header>
      <Grid>{children}</Grid>
    </Container>
  );
}
