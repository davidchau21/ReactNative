import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container} >
      <View style={{ marginLeft:-20,marginRight:-20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <Button title='<-' onPress={() => navigation.navigate('screen3')}></Button>
        <Button title='->' onPress={() => navigation.navigate('screen5')}></Button>
      </View>
      <View style={{
          flex: 1, 
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          fontFamily: 'sans-serif',
          fontWeight: 'bold' 
        }}>LOGIN</View>

      <View style={{ 
          flex: 1, 
          }}>
            <TextInput
              style={{ flex: 1, backgroundColor:'#9ac2b9', padding:9, borderRadius:5}}
              placeholder='Email'></TextInput>
            <View style={{flex:1}}></View>
            <View style={{ flex: 1.5, flexDirection: 'row', backgroundColor: '#9ac2b9', borderRadius: 5 }}>
              <TextInput
                style={{ flex: 1, backgroundColor: '#9ac2b9', padding: 9 }}
                placeholder='Password'></TextInput>
              <Image style={{ marginRight: 20, height: 40, width: 40, alignSelf: 'center', backgroundColor: '#9ac2b9' }} source={{ uri: 'https://static.thenounproject.com/png/4830332-200.png' }}></Image>
            </View>
            <View style={{flex:1}}></View>
      </View>

      <View style={{ flex: 2 }}>
        <Button title='LOGIN' color="red" style={{ flex: 1 }}></Button>
        <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontWeight:'bold'}}>When you agree to terms and condrons</Text>
          <Text style={{ color:'#1565f7' }}>For got your password</Text>
          <Text style={{ fontWeight: 'bold' }}>Or login with</Text>
        </View>
        <View style={{ flex: 1, flexDirection:'row'}}>
          <Image style={{ flex: 1, borderRadius:15 }} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/640px-Facebook_icon_2013.svg.png" }}></Image>
          <Image style={{ flex: 1, borderRadius: 15 }} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Zalo_logo_2019.svg/2560px-Zalo_logo_2019.svg.png" }}></Image>
          <Image style={{ flex: 1, borderRadius: 15 }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0GVd31ZFn2rnuKtmVRGf9ysXeLJz14NkXN2TsiT9XGPTvaX3ffp-s17xiyrsi1JAhvo&usqp=CAU" }}></Image>
        </View>
        <View style={{ flex: 1.5 }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C7F4F6',
    paddingLeft: 20,
    paddingRight: 20,
  },
  

});