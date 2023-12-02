import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.style1}>
        <Text style={styles.title}>A premium online store for <br/>sporter and their stylish choice</Text>
      </View>
      <View style={styles.style2}>
        <View style={styles.image}>
          <Image source={require('../assets/images/bifour_-removebg-preview.png')} 
            style={{width: "292px", height: "270px"}}
            resizeMode='contain'
          />
        </View>
        <Text style={styles.nameApp}>POWER BIKE <br/>SHOP</Text>
      </View>
      <View style={styles.style3}>
        <TouchableOpacity onPress={()=>{navigation.navigate("ListProduct")}}>
          <View style={styles.btn}>
            <Text style={styles.textbtn}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '8px',
    backgroundColor: "rgba(249, 247, 246, 1)",
  },
  style1:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  style2:{
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  style3:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: "26px",
    fontWeight: '400',
    fontFamily: 'VT323',
    textAlign: 'center',
    width: '100%',
    color: "rgba(0, 0, 0, 1)",
  },
  image:{
    backgroundColor: "rgba(233, 65, 65, 0.1)",
    width: "359px",
    height: "388px",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: "50px",
  },
  nameApp:{
    textTransform: 'uppercase',
    textAlign: 'center',
    fontFamily: "Ubuntu",
    fontWeight: "700",
    fontSize: "26px",
    marginTop: "21px",
  },
  btn:{
    backgroundColor: "rgba(233, 65, 65, 1)",
    width: "340px",
    height: "61px",
    borderRadius: "30px",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbtn:{
    fontFamily: "VT323",
    fontSize: "27px",
    fontWeight: "400",
    color: "rgba(254, 254, 254, 1)",
  },
})