import "react-native-gesture-handler";
import "./src/translations/i18n";
import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import { NativeBaseProvider } from 'native-base'

import { Loading } from "./src/components/";
import { Routes } from "./src/routes";
import { THEME } from "src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor="#404258" />
      <Routes />
    </NativeBaseProvider>
  );
}
