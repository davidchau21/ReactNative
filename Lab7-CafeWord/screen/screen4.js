import { Text, View, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import {useState, useEffect} from "react"
export default function App({navigation,route}){
  
  return(
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Pressable onPress={()=>navigation.navigate('CafeScreen3')}>
          <Image
            source={require("../assets/BackIcon.png")}
            style={{width:20,height:50}}
          />
        </Pressable>
        <Text style={{fontWeight:700, fontSize:24, marginRight:80}}>
          Your orders
        </Text>
        <Image
          source={require("../assets/SearchIcon.png")}
          resizeMode="contain"
          style={{width:25,height:50}}
        />
      </View>

      <View style={styles.viewOrder}>
        <View>
          <Text style={styles.txtCDelivery}>
            CAFE DELIVERY
          </Text>
          <Text style={styles.txtCDelivery}>
            Order #18
          </Text>
        </View>
        <View style={{marginLeft:80,justifyContent:"center"}}>
          <Text style={styles.txtCDelivery}>
            $5
          </Text>
        </View>
      </View>

      <Pressable style={styles.btnPay}>
        <Text style={{fontSize:16, fontWeight:400, color:"#fff"}}>
          PAY NOW
        </Text>
      </Pressable>
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
  viewOrder:{
    flexDirection:"row",
    marginTop:15,
    width:280,
    height:60,
    borderRadius:6,
    backgroundColor:"#00BDD6",
    shadowOpacity: 0.3,
      shadowOffset: {
	    width: 0,
	    height: 4,
      },
    shadowColor: '#000'
  },
  txtCDelivery:{
    fontSize:16,
    fontWeight:700,
    color:"#fff",
    margin:4
  },
  btnPay:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width:300,
    height:40,
    borderRadius:6,
    backgroundColor:"#EFB034",
    marginTop:30
  }
})