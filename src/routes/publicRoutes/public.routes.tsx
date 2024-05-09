import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../modules/home/screens";

export default function PublicRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
