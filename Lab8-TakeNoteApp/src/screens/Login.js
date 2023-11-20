import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import { Alert } from 'react-native';

const Login = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    console.log(email);
    console.log(password);
    const [data, setData] = React.useState([]);
    const [notes, setNotes] = React.useState([]);
    useEffect(() => {
        fetch('https://655aff8fab37729791a865ab.mockapi.io/api/v1/takenote', {
            method: 'GET',
            headers: {'content-type':'application/json'},
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            // handle error
        }).then(tasks => {
            console.log(tasks);
            setData(tasks);
        }).catch(error => {
            // handle error
        })
    }, []);
    console.log(data);
    const handleLogin = () => {
        const user = data.find((user) => user.userName === email && user.passWord === password);
        console.log(user);
        if (user) {
            console.log('Login successful');
            navigation.navigate({
                name: 'TakeNote',
                params:{
                    id: user.id,
                }
            })
        } else {
            Alert.alert('Invalid Credentials', 'Please check your email and password.');
        }
    };
    return (
    <View style={styles.container}> 
    <View style={styles.style2}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={require('../../assets/logo.jpeg')} style={{width: 200, height: 200, top: 56}} />
            <Text style={{fontSize: 28, fontWeight: 900, color: '#403B36', textAlign: 'center', width: 308, height: 33, textAlign: 'center', marginTop: 14, top:60}}>Login</Text>
        </View>
        <View style={{marginTop: 40}}>
            <View style={{width: 330, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: 700}}>Email Address</Text>
                <TextInput style={{backgroundColor: '#ecf0f4', borderRadius: 10, marginTop: 8, height: 60, fontSize: 18, fontWeight: 700, color: 'rgba(89, 85, 80, 1)', paddingHorizontal: 16, paddingVertical:19}} 
                placeholder='calocdongda@gmail.com' value={email} onChangeText={(email)=>{setEmail(email)}}/>
            </View>
            <View style={{width: 330, marginTop: 20}}>
                <Text style={{fontSize: 14, fontWeight: 700}}>Password</Text>
                <TextInput style={{backgroundColor: '#ecf0f4', borderRadius: 10, marginTop: 8, height: 60, fontSize: 18, fontWeight: 700, color: 'rgba(89, 85, 80, 1)', paddingHorizontal: 16, paddingVertical:19}}
                placeholder='########' value={password} onChangeText={(password)=>{setPassword(password)}}/>
            </View>
        </View>
    </View>
    <View style={styles.style3}>
        <TouchableOpacity onPress={handleLogin}>
            <View style={{backgroundColor: '#48c78e', borderRadius: 12, width: 330, height: 74, justifyContent: 'center', alignItems: 'center', top:25}}>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#F8EEE2'}}>Login</Text>
            </View>
        </TouchableOpacity>
        
        <View style={{marginTop: 30}} onPress={() => { navigation.navigate('CreateAccount')}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#48c78e', top:6}}>Don't have an account yet?</Text>
        </View>
    </View>

</View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
    style2:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style3:{
        flex: 2,
        alignItems: 'center',
        marginTop: 40,
    },
})