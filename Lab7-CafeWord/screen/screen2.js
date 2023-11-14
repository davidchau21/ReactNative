import { StyleSheet, Text, View, Pressable, FlatList, Image } from 'react-native'
import React from 'react'

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Pressable onPress={()=>navigation.navigate('Screen01')}>
          <Image
            source={require("../assets/BackIcon.png")}
            style={{width:20,height:50}}
          />
        </Pressable>
        <Text style={{fontWeight:700, fontSize:24, marginRight:20}}>
          Shop Nears Me
        </Text>
        <Image
          source={require("../assets/SearchIcon.png")}
          resizeMode="contain"
          style={{width:25,height:50}}
        />
      </View>
      {/* <FlatList
        data={data}
        renderItem={({item})=>
        <Pressable style={styles.viewShop} onPress={()=>navigation.navigate("CafeScreen3", { item })}>
          <Image
            source={{uri:item.img}}
            resizeMode="cover"
            style={{width:310,height:120,borderRadius:6}}
          />
          <View style={{flexDirection:"row",marginTop:5}}>
            <View style={{flexDirection:"row", width:280}}>
              <View style={styles.viewOpen}>
                <Image
                  source={{uri:item.imgState}}
                  resizeMode="contain"
                  style={{width:20,height:20}}
                />
                <Text style={{fontWeight:400, fontSize:14, marginLeft:5}}>{item.state}</Text>
              </View>
              <View style={styles.viewTime}>
                <Image
                  source={require("../assets/ClockIcon.png")}
                  resizeMode="contain"
                  style={{width:20,height:20}}
                />
                <Text style={{fontWeight:400, fontSize:14, marginLeft:5, color:"red"}}>{item.time}</Text>
              </View>
            </View>
              <Image
                source={require("../assets/MapIcon.png")}
                resizeMode="contain"
                style={{width:20,height:20, marginLeft:2}}
              />
          </View>
          <Text style={styles.txtNameShop}>{item.nameShop}</Text>
          <Text style={styles.txtAdress}>{item.address}</Text>
        </Pressable>
      }
      /> */}
      
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"rgba(18, 15, 40, 0.12)"
  },
  viewTitle: {
    flexDirection: "row",
    alignItems:"center",
    gap:30
  },
  viewShop:{
    marginTop:15,
    width:310,
    height:190,
    borderRadius:6,
    backgroundColor:"#fff",
    shadowOpacity: 0.3,
      shadowOffset: {
	    width: 0,
	    height: 4,
      },
    shadowColor: '#000'
  },
  viewOpen:{
    marginLeft:2,
    flexDirection:"row",
    backgroundColor:"#F3F4F6"
  },
  viewTime:{
    marginLeft:10,
    flexDirection:"row",
    backgroundColor:"#F3F4F6"
  },
  txtNameShop:{
    marginLeft:5,
    fontWeight:700,
    fontSize:16
  },
  txtAdress:{
    marginLeft:5,
    fontWeight:400,
    fontSize:14,
    color:"grey"
  }
});