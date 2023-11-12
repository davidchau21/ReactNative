import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Screen1 from "./screen/screen1"
import Screen2 from "./screen/screen2"
export default function App() {
  let Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}