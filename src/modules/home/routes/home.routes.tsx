import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens";

export default function HomeRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
}
