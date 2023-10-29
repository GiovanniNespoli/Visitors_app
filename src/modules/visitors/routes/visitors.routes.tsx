import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateVisior from "../screens/createVisitor";

export default function VisitorRoute() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="CreateVisitor" component={CreateVisior} />
    </Navigator>
  );
}
