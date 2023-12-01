import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function App() {
  let navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Welcome to Cafe world</Text>
      <Image source={require('../assets/hinh1.png')} style={{ margin: 50 }} />
      <Image
        source={require('../assets/hinh2.png')}
        style={{ marginBottom: 50 }}
      />
      <Pressable
        style={styles.btnGST}
        onPress={() => {
          navigation.navigate('Shop near me');
        }}>
        <Text style={{ fontWeight: 400, color: '#FFF' }}>GET START</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: "rgba(18, 15, 40, 0.12)"
  },
  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnGST: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 260,
    borderRadius: '6px',
    backgroundColor: '#00BDD6',
  },
});
