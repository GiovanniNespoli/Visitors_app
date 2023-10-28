import { NavigationContainer } from "@react-navigation/native";
import PublicRoutes from "./publicRoutes/public.routes";

export default function Routes() {
  return (
    <NavigationContainer>
      <PublicRoutes />
    </NavigationContainer>
  );
}
