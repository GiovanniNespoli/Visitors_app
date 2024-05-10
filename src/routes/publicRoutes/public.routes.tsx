import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../modules/home/screens";
import CreateVistior from "../../modules/visitors/screens/createVisitor";

export default function PublicRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Teste" component={CreateVistior} />
    </Navigator>
  );
}
