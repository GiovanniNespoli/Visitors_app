import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeRoutes from "../../modules/welcome/routes/welcome.routes";
import HomeRoutes from "../../modules/home/routes/home.routes";
import CreateDreamScreen from "../../modules/dreams/screens/CreateDreams";
import TableDreamScreen from "../../modules/dreams/screens/TableDreams";

export default function PublicRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="welcomeModule" component={WelcomeRoutes} />
      <Screen name="homeModule" component={HomeRoutes} />
      <Screen name="createDreams" component={CreateDreamScreen} />
      <Screen name="tableDreams" component={TableDreamScreen} />
    </Navigator>
  );
}
