import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Screen1 from './screen/screen1';
import Screen2 from './screen/screen2';
import Screen3 from './screen/screen3';
import Screen4 from './screen/screen4';

export default function App() {
  let Stack = createStackNavigator();
  return (
     <NavigationContainer>
        <Stack.Navigator initialRouteName='Screen2'>
          <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
          <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
          <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
          <Stack.Screen name="Screen4" component={Screen4} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
