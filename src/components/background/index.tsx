import { ReactNode } from "react";
import {
  Body,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation, DrawerActions } from "@react-navigation/native";

interface IBackgroundProps {
  children: ReactNode;
  title: string;
  subTitle: string;
  iconName: "user-plus" | "book";
}

export default function Background({
  children,
  subTitle,
  title,
  iconName,
}: IBackgroundProps) {
  const navigation = useNavigation();

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flex: 1 }}>
      <Container>
        <Header>
          <Grid>
            <NavigationContainer>
              <ButtonNavigationContent
                onPress={() => {
                  navigation.dispatch(DrawerActions.openDrawer());
                }}
              >
                <MaterialIcons name="menu" size={36} color={theme.white} />
              </ButtonNavigationContent>
              <TitleText>{title}</TitleText>
              <ButtonNavigationContent />
            </NavigationContainer>
            <SubTitleContainer>
              <SubTitle>{subTitle}</SubTitle>
              <Icon>
                <Feather name={iconName} size={65} color={theme.white} />
              </Icon>
            </SubTitleContainer>
          </Grid>
        </Header>
        <Body>
          <Grid>{children}</Grid>
        </Body>
      </Container>
    </KeyboardAwareScrollView>
  );
}
