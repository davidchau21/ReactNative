import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'

const URL = 'https://6540a02c45bedb25bfc23317.mockapi.io/api/v1/appDe1';

const Login = ({ navigation }) => {
    const [data, setData] = React.useState([]);
    useEffect(() => {
        fetch(URL, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        }).then(data => {
            console.log(data);
            setData(data);
        }).catch(error => {
            console.log(error);
        })
    }, []);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    console.log(username);
    console.log(password);

    const handleLogin = () => {
        const user = data.find((user) => user.username === username && user.password === password);
        console.log(user);
        if (user) {
            console.log('Login success');
            navigation.navigate({
                name: 'Home',
                params: {
                    user: user,
                }
            })
        } else {
            Alert.alert('Invalid Credentials', 'Please check your email and password.')
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.style1}>
                <Text style={{ fontSize: 30 }}>LOGIN</Text>
            </View>
            <View style={styles.style2}>
                <View style={{ width: '100%', alignItems: 'center', gap: 5 }}>
                    <Text style={{ alignItems: 'flex-start', width: '80%' }}>Username</Text>
                    <TextInput onChangeText={text => setUsername(text)}
                        style={{ borderWidth: 1, width: '80%', height: 50, borderRadius: 15, fontSize: 16, paddingHorizontal: 10 }} />
                </View>
                <View style={{ width: '100%', alignItems: 'center', gap: 5, marginTop: 15 }}>
                    <Text style={{ alignItems: 'flex-start', width: '80%' }}>Password:</Text>
                    <TextInput onChangeText={text => setPassword(text)} 
                        style={{ borderWidth: 1, width: '80%', fontSize: 16, height: 50, borderRadius: 15, paddingHorizontal: 10 }} />
                </View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 25 }}>
                    <TouchableOpacity onPress={handleLogin}
                        style={{ width: '80%', height: 50, backgroundColor: '#000', borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
                        <Text style={{ fontSize: 20, color: '#FFF' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    style1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    style2: {
        flex: 2,
        alignItems: 'center',
        width: '100%',
    }
})