import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UpdateNote from './screen/UpdateNote';
import HomeScreen from './screen/NoteList';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UpdateNote" component={UpdateNote} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}
