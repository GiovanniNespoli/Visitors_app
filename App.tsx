import {
  useFonts,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
} from "@expo-google-fonts/dev";
import Routes from "./src/routes/index.routes";
import { StatusBar } from "expo-status-bar";
import AppProvider from "./src/hooks";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
}
