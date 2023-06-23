import 'react-native-get-random-values'
import "react-native-gesture-handler";

import "./src/translations/i18n";
import { StatusBar } from "native-base";
import React from "react";

import { AuthContextProvider } from '@contexts/AuthContext';

import { NativeBaseProvider } from 'native-base'

import { AppProvider } from '@realm/react';

import { Routes } from "./src/routes";
import { THEME } from "./src/theme";

import { DataContextProvider } from "@contexts/DataContext";
import { RealmProvider, syncConfig } from "./src/lib/realm/index";
import { Loading } from '@components/Loading';

export default function App() {

  return (
    <AppProvider id={'application-0-ozhjl'}>
      <NativeBaseProvider theme={THEME}>
        <StatusBar 
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <AuthContextProvider>
          <DataContextProvider>
            <RealmProvider sync={syncConfig} fallback={Loading}>
              <Routes />
            </RealmProvider>
          </DataContextProvider>
        </AuthContextProvider>
      </NativeBaseProvider>
    </AppProvider>
  );
}
