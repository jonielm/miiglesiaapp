import React from "react";
import Navigation from "./Navigation";  
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Navigation />
    </SafeAreaProvider>
  );
}
