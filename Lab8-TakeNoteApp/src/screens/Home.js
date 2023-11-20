import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.style1}>
            <Text style={{fontSize: 28, fontWeight: 'bold', color: '#403B36'}}>TAKE <Text style={{fontSize: 28, fontWeight: 'bold', color: '#48c78e'}}>NOTE</Text></Text>
            
        </View>
        <View style={styles.style2}>
            <Image source={require('../../assets/logo.jpeg')} style={{width: 300, height: 230}} resizeMode='contain'/>
            <Text style={{fontSize: 25, fontWeight: 'bold', width: 307, height: 66, textAlign: 'center', marginTop: 18, color: '#403B36'}}>World’s Safest And Largest Digital Notebook</Text>
            <Text style={{fontSize: 17, width: 308, height: 63, textAlign: 'center', marginTop: 12, color: '#595550'}}>TakeNote is the world’s safest, largest and intelligent digital notebook. Join over 10M+ users already using TakeNote.</Text>
        </View>
        <View style={styles.style3}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
                <View style={{backgroundColor: '#48c78e', borderRadius: 12, width: 319, height: 74, justifyContent: 'center', alignItems: 'center', top:15}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: '#F8EEE2'}}>Get Started</Text>
                </View>
            </TouchableOpacity>
            
        </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    style1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style2:{
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style3:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
})