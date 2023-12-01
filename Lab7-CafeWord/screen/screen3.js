import { Text, View, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import {useState, useEffect} from "react"

export default function App({navigation,route}){
  
  var [data, setData] = useState(route.params.item);
  var [item, setItem] = useState(route.params.item.drink) 
  console.log(item)
  const orderDrinks = (item) => {
    const order = {
      name: item.name,
      price: item.price,
      img: item.img,
    };
    data.orders.push(order);
    console.log(order);
    fetch(`https://654325f301b5e279de1ff315.mockapi.io/Shop/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((updateOrders) => {
        setData(updateOrders);
      });
  };
  return(
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Pressable onPress={()=>navigation.navigate('CafeScreen2')}>
          <Image
            source={require("../assets/BackIcon.png")}
            style={{width:20,height:50}}
          />
        </Pressable>
        <Text style={{fontWeight:700, fontSize:24, marginRight:100}}>
          Drinks
        </Text>
        <Image
          source={require("../assets/SearchIcon.png")}
          resizeMode="contain"
          style={{width:25,height:50}}
        />
      </View>
      <FlatList
        data={item}
        renderItem={({item})=>
          <View style={styles.viewShop}>
            <Image
              source={{uri:item.img}}
              resizeMode="contain"
              style={{width:60,height:60, borderBottomLeftRadius:6, borderTopLeftRadius:6}}
            />
            <View style={{width:140}}>
              <Text style={{marginLeft:10, fontSize:16, fontWeight:500}}>
                {item.name}
              </Text>
              <View style={{flexDirection:"row", marginTop:10,marginLeft:10}}>
                <Image
                  source={require("../assets/Frame.png")}
                  resizeMode="contain"
                  style={{width:15,height:15,marginRight:5, marginTop:3}}
                />
                <Text>
                  ${item.price}
                </Text>
              </View>
            </View>

            <View style={{flexDirection:"row", justifyContent: "space-around", gap:20}}>
              <Pressable style={styles.btnCT}>
                <Image
                source={require("../assets/Tru.png")}
                resizeMode="contain"
                style={{width:20,height:20}}
              />
              </Pressable>
              <Pressable style={styles.btnCT}>
                <Image
                source={require("../assets/Cong.png")}
                resizeMode="contain"
                style={{width:20,height:20}}
                />
              </Pressable>
            </View> 
          </View>
        }
      />
      <Pressable style={styles.btnGoToCart}>
        <Text style={{fontSize:16, fontWeight:400, color:"#fff"}}>
          GO TO CART
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
  viewShop:{
    flexDirection:"row",
    marginTop:15,
    width:280,
    height:60,
    borderRadius:6,
    backgroundColor:"#fff",
    shadowOpacity: 0.3,
      shadowOffset: {
	    width: 0,
	    height: 4,
      },
    shadowColor: '#000'
  },
  btnCT:{
    justifyContent:"center",
    alignSelf:"center"
  },
  btnGoToCart:{
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