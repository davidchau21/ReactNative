import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react'
import {useNavigation} from "@react-navigation/native"
export default function Screen1() {

  let navigation = useNavigation()
  let [emailIn, setEmail] = React.useState('')
  let [DATA, setData] = React.useState([])

  fetch("https://6540a02c45bedb25bfc23317.mockapi.io/api/v1/user")
    .then(response=>{
      if (response.ok)
        return response.json()
    })
    .then(dataO=>{
      if(DATA.length==0)
        setData(dataO)
    })


  return (
    <View style={styles.container}>
        <View style={{flex:1}}></View>
        <Image style={{marginTop:20,flex:3,width:'100%', height:'auto', resizeMode:'contain'}} source={{uri:'https://res.cloudinary.com/mycloudd/image/upload/v1698735700/img95.png'}}></Image>
        <View style={{flex:0.5}}></View>
        <Text style={{fontSize:30, fontWeight:'bold', textAlign:'center', color:'#8353E2'}}>MANAGE YOUR</Text>
        <Text style={{fontSize:30, fontWeight:'bold', textAlign:'center', color:'#8353E2'}}>TEST</Text>
        <View style={{flex:1}}></View>
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
        <Image style={{ left: 10, width: 20, height: 20, resizeMode: 'contain', position: 'absolute' }} source={{ uri:'https://cdn-icons-png.flaticon.com/512/2099/2099100.png'}}></Image>
          <TextInput style={{height:40, flex:1, borderRadius:5, borderWidth:1, paddingLeft:40}} placeholder='Enter your name' onChangeText={setEmail}></TextInput>
        </View>
        <View style={{flex:1}}></View>
      { DATA.length == 0 &&<View style={{ flex: 0.7 }}></View>}
      {DATA.length != 0&&
        <TouchableOpacity style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00BDD6', borderRadius: 30 }}
          onPress={
            () => {

              for (let i = 0; i < DATA.length; i++) {
                if (DATA[i].email == emailIn) {
                  navigation.navigate("Screen2", { user: DATA[i] })
                }
              }

            }}
        >
          <Text style={{ color: 'white' }}>GET STARTED</Text>
        </TouchableOpacity>
        }
      <View style={{flex:1}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    paddingLeft:"5%",
    paddingRight:"5%"
  },
});