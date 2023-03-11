import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>파이어 베이스 연동까지함 + Auth npm 다운</Text>
      <StatusBar style="auto" />
    </View>
  );
}
