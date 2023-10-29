import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Screen1 from "./screen/screen1";
import Screen2 from "./screen/screen2";
const Stack = createNativeStackNavigator();
import Icon from "react-native-vector-icons/FontAwesome5";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen1"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#1BA9FF",
          },
        }}
      >
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{
            headerTitle: () => (
              <Text
                style={{ fontSize: 20, marginLeft: "125px", color: "white" }}
              >
                Chat
              </Text>
            ),
            headerLeft: () => (
              <Icon
                name="arrow-left"
                size={30}
                color="white"
                style={{ marginLeft: "10px" }}
              />
            ),
            headerRight: () => (
              <Icon
                name="shopping-cart"
                size={30}
                color="white"
                style={{ marginRight: "10px" }}
              />
            ),
          }}
        />

        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            headerTitle: () => (
              <View
                style={{
                  backgroundColor: "white",
                  paddingVertical: "8px",
                  paddingHorizontal: "10px",
                  width: "auto",
                  flexDirection: "row",
                  marginLeft: "10px",
                  marginRight: "20px",
                }}
              >
                <Icon name="search" color="black" size={24} />
                <TextInput
                  placeholder="Dây cáp usb"
                  style={{
                    marginLeft: "10px",
                    outlineStyle: "none",
                    fontSize: "18px",
                  }}
                />
              </View>
            ),
            headerLeft: () => (
              <Icon
                name="arrow-left"
                size={30}
                color="white"
                style={{ marginLeft: "10px" }}
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="shopping-cart"
                  size={30}
                  color="white"
                  style={{ marginRight: "10px" }}
                />
                <Icon
                  name="ellipsis-h"
                  size={30}
                  color="white"
                  style={{ marginRight: "10px" }}
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
