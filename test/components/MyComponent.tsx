import React, { useState } from "react";
import { View } from "react-native";
import { Text, Button } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoard from "./DashBoard";

const Tab = createBottomTabNavigator();

export default function App() {
  const [number, setNumber] = useState(0);
  const handleOnPress = () => {
    setNumber(number + 1);
  };
  const navigation = useNavigation();

  const HomeScreen = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text h3>Start Using RNE </Text>
      <Text
        style={{
          fontSize: 30,
          color: "black",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {number}
      </Text>
      <Button onPress={handleOnPress}>Switch Theme</Button>
      <Button
        onPress={
          () => {
          navigation.navigate("DashBoard");
        }}
      >
        Go to 2nd Page
      </Button>
    </View>
  );


  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Dashboard_1" component={DashBoard} />
    </Tab.Navigator>
  );
}
