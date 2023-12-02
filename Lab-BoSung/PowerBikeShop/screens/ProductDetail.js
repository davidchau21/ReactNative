import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductDetail = ({route, navigation}) => {
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [image, setImage] = React.useState(""); 
    
    React.useEffect(()=>{
        const {name, price, image} = route.params;
        setName(name);
        setPrice(price);
        setImage(image);
    }
    ,[])
  return (
    <View style={styles.container}>
        <View style={styles.style1}>
            <View style={styles.image}>
                <Image source={image}
                    style={{width: "297px", height: "340px"}}
                    resizeMode='contain'
                />
            </View>
        </View>
        <View style={styles.style2}>
            <Text style={{
                fontFamily: 'Voltaire',
                fontSize: "35px",
                fontWeight: '400',
                
            }}>{name}</Text>
            <Text style={{
                fontFamily: 'Voltaire',
                fontSize: "25px",
                fontWeight: '400',
                marginTop: "7px",
            }}>
                <Text style={{
                    color: "rgba(0, 0, 0, 0.59)",
                }}>15% OFF I 350$</Text>
                <Text style={{
                    marginLeft: "41px",
                    textDecorationLine: 'line-through',
                }}>{price}$</Text>
            </Text>
            <Text style={{fontFamily: "Voltaire", fontSize: "25px", fontWeight: "400", marginTop: "25px",}}>Description</Text>
            <Text style={{fontFamily: "Voltaire", fontSize: "22px", color: "rgba(0, 0, 0, 0.57)",fontWeight: "400", marginTop: "31px",}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
        </View>
        <View style={styles.style3}>
            <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', width: '100%',}}>
                <Image source={require('../assets/images/akar-icons_heart.png')}
                    style={{width: 35, height: 35,}}
                    resizeMode='contain'
                />
                <TouchableOpacity onPress={()=>{navigation.navigate("ListProduct")}}>
                    <View style={styles.btn}>
                        <Text style={styles.textbtn}>Add to card</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
        </View>

    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '8px',
    },
    style1:{
        flex:8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style2:{
        flex: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    style3:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: "11px",
    },
    image:{
        width: '375px',
        height: '388px',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(233, 65, 65, 0.1)",
        borderRadius: '5px',
    },
    btn:{
        width:"269px",
        height: "54px",
        backgroundColor: "rgba(233, 65, 65, 1)",
        borderRadius: "30px",
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbtn:{
        color: "rgba(255, 250, 250, 1)",
        fontFamily: "Voltaire",
        fontSize: "25px",
        fontWeight: "400",
    },
})