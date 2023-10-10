
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{ flex: 0.3 }}></View>
      <View style={{ flex: 3 }}>
        <Image style={{ flex: 1, height: '100%', width: 'auto', resizeMode: 'center' }} source={{ uri: 'https://www.xtmobile.vn/vnt_upload/product/08_2019/vsmart-joy-3-2gb-32gb.jpg'}}></Image>
      </View>
      <Text style={{ flex: '0 1 0%', fontSize:15, alignItems:'center', left: '20px'}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View style={{ flex: 1, flexDirection: 'row'}}>
        <Image style={{ flex: 1, height: '50%', width: 'auto', left:0}} source={{uri:'https://www.pngmart.com/files/23/Stars-PNG.png'}}></Image>
        <Text style={{flex:1, justifyContent:'center', fontSize:16, alignSelf:'center', top: '-29px', left: '10px'}}>(Xem 823 danh gia)</Text>
      </View>
      <View style={{flex:1, flexDirection:'row'}}>
        <Text style={{flex:1, fontWeight:'bold', fontSize:20, left: 0}}>1.790.000 đ</Text>
        <Text style={{ flex: 1, fontSize: 18, fontSize:16, alignSelf:'center', top: '-29px', left: '10px'}}><del>1.790.000 đ</del></Text>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: '5%',
    paddingRight: '5%',
  },
});
