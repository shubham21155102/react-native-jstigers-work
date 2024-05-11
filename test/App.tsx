import React from "react";
import { createTheme, ThemeProvider } from "@rneui/themed";
import Component from "./components/MyComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashBoard from "./components/DashBoard";
import EditExpenseForm from "./components/EditExpense";
export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Component} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="EditExpense" component={EditExpenseForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
