import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import CreateVisior from "../../modules/visitors/screens/createVisitor";
import theme from "../../styles/theme";

function CustomTest(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label={"lugares q n existe"}
        onPress={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </DrawerContentScrollView>
  );
}

export default function PublicRoutes() {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme.secondary,
        },
        drawerActiveBackgroundColor: theme.white,
        drawerActiveTintColor: theme.black,
      }}
      drawerContent={(props) => <CustomTest {...props} />}
    >
      <Screen name="visitorsModule" component={CreateVisior} />
    </Navigator>
  );
}
