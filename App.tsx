import React from "react";
import {
  useFonts,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/dev";

import Routes from "./src/routes/index.routes";

import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { NativeBaseProvider } from "native-base";

import moment from "moment";

import "react-native-gesture-handler";
import "moment/locale/pt-br";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/service/api";

moment.locale("pt-br");

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <StatusBar style="light" />
        <Routes />
        <Toast />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
