import { Text, Image, TouchableOpacity, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import sreen1 from './sreen1';

const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const checkLogin = () => {
    const users = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
      { email: 'user3@example.com', password: 'password3' },
      { email: 'user4@example.com', password: 'password4' },
      { email: 'user5@example.com', password: 'password5' },
    ];

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setErrorMessage('');
      navigation.navigate('HomePage'); // Điều hướng đến trang khác sau khi đăng nhập thành công
      console.log('Đăng nhập thành công');
    } else {
      setErrorMessage('Thông tin đăng nhập không hợp lệ.');
    }
  };

  return (
    <View>
      <View style={{ flex: 2 }}></View>

      <View style={{ flex: 1.5, flexDirection: 'row', borderRadius: 5, borderWidth: 2, borderColor: '#fcfaf2' }}>
        <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' }}></Image>
        <TextInput
          style={{ flex: 1, padding: 9 }}
          placeholder='Email'
          onChangeText={(text) => setEmail(text)}
          value={email}
        >
        </TextInput>
      </View>  
      <View style={{ flex: 0.6 }}></View>
      <View style={{ flex: 1.5, flexDirection: 'row', borderRadius: 5, borderWidth: 2, borderColor:'#fcfaf2'}}>
        <Image style={{ marginLeft: 10, height: 30, width: 30, alignSelf: 'center' }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Lock_Icon.svg/768px-Lock_Icon.svg.png' }}></Image>
        <TextInput
          style={{ flex: 1, padding: 9}}
          placeholder='Password'
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        ></TextInput>
        <Image style={{marginRight:20, height: 40, width: 40, alignSelf: 'center'}} source={{ uri: 'https://static.thenounproject.com/png/4830332-200.png' }}></Image>
      </View>       

      <View style={{ flex: 1 }}></View>
      <TouchableOpacity style={{ flex: 1.5, backgroundColor:'black', alignItems:'center', justifyContent:'center', borderRadius:3}}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, padding:10}} onPress={checkLogin}>LOGIN</Text>
        <Text style={{ color: 'red' }}>{errorMessage}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown: false}}/>
        <Stack.Screen name="HomePage" component={sreen1}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


