import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens";

export default function WelcomeRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Welcome" component={WelcomeScreen} />
    </Navigator>
  );
}
