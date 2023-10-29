import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VisitorsRoutes from "../../modules/visitors/routes/visitors.routes";

export default function PublicRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="visitorsModule" component={VisitorsRoutes} />
    </Navigator>
  );
}
