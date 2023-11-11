import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import CreateVisior from "../../modules/visitors/screens/createVisitor";
import theme from "../../styles/theme";
import ListVisitors from "../../modules/visitors/screens/listVisitor";

export default function PublicRoutes() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#A9CBD9",
        },
        drawerActiveBackgroundColor: theme.white,
        drawerActiveTintColor: theme.black,
      }}
    >
      <Screen name="Cadastrar visitante" component={CreateVisior} />
      <Screen name="Listar visitante" component={ListVisitors} />
    </Navigator>
  );
}
