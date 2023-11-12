import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useState } from "react"
import Screen01 from "./screen/screen1"
import Screen02 from "./screen/screen2"
import Screen03 from "./screen/screen3"
import Screen04 from "./screen/screen4"

export let  MyContext = createContext()
export default function App() {
  const Stack = createNativeStackNavigator();
  let [todolist, setTodolist] = useState({});
  return (
    <MyContext.Provider value={{todolist, setTodolist}}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Screen01" component={Screen01} options={{ headerShown: false }} />
        <Stack.Screen name="Screen02" component={Screen02} options={{ headerShown: false }} />
        <Stack.Screen name="Screen03" component={Screen03} options={{ headerShown: false }} />
        <Stack.Screen name="Screen04" component={Screen04} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContext.Provider>
  );
}

