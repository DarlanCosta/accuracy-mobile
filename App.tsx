import 'react-native-get-random-values'
import "react-native-gesture-handler";

import "./src/translations/i18n";
import { StatusBar } from "native-base";
import React from "react";

import { AuthContextProvider } from '@contexts/AuthContext';

import { NativeBaseProvider } from 'native-base'

import { Routes } from "./src/routes";
import { THEME } from "./src/theme";

import { DataContextProvider } from "@contexts/DataContext";
import { RealmProvider } from "@database/index";

export default function App() {

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        <DataContextProvider>
          <RealmProvider>
            <Routes />
          </RealmProvider>
        </DataContextProvider>
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}
