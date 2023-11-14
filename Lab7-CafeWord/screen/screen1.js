import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function App() {
  let navigation = useNavigation();
  
  return (
    <View style={styles.container}>

      <View style={{flex:1, margin:15, alignItems:"center"}}>
      <Text style={{ alignItems:"center", justifyContent:"space-between", padding:40, fontSize:20, fontWeight:'bold'}}>Welcome to Cafe world</Text>
        <Image 
        source={require('../assets/hinh1.png')}
        style={{height:70,width:200,  borderRadius:15, margin:20}}
        ></Image>
        
        <Image 
        source={require('../assets/hinh2.png')}
        style={{height:70,width:200, borderRadius:15, margin:20}}
        ></Image>
        <Image 
        source={require('../assets/hinh3.jpg')}
        style={{height:70,width:200, borderRadius:15, margin:20}}
        ></Image>
      </View>
      <View style={{flex:0.2}}>
        <TouchableOpacity style={{height:50,width:280, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00BDD6', borderRadius: 5 }}
        onPress={() => {
          navigation.navigate('Screen2');
        }} 
        >
            <Text>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
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
