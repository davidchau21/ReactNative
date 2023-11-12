import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function App() {
  
  return (
    <View style={styles.container}>

      <View style={{flex:1, margin:15, alignItems:"center"}}>
      <Text style={{ alignItems:"center", justifyContent:"space-between", padding:40, fontSize:20, fontWeight:'bold'}}>Welcome to Cafe world</Text>
        <Image 
        source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/11/db/5e/d4/vidriera.jpg"}}
        style={{height:70,width:200,  borderRadius:15, margin:20}}
        ></Image>
        
        <Image 
        source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/11/db/5e/d4/vidriera.jpg"}}
        style={{height:70,width:200, borderRadius:15, margin:20}}
        ></Image>
        <Image 
        source={{uri: "https://media-cdn.tripadvisor.com/media/photo-s/11/db/5e/d4/vidriera.jpg"}}
        style={{height:70,width:200, borderRadius:15, margin:20}}
        ></Image>
      </View>
      <View style={{flex:0.2}}>
        <TouchableOpacity style={{height:50,width:280, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00BDD6', borderRadius: 5 }}>
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
