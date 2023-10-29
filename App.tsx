import {
  useFonts,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_500Medium,
} from "@expo-google-fonts/dev";
import Routes from "./src/routes/index.routes";
import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
  );
}
