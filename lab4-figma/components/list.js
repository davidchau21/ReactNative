import React from 'react';
import { SafeAreaView, FlatList, Text, View, TouchableOpacity, Image} from 'react-native';
import { MyContext } from '../App';
export function BodyList() {
  const DATA =[
    {
      id: '0',
      title: 'Ca nấu lẩu, nấu mì mini đa năng',
      nameShop: 'Shop Devang',
      img: 'https://salt.tikicdn.com/ts/product/4b/01/99/8c5ecfa9379baae6acc9074fbe634248.jpg',
    },
    {
      id: '1',
      title: '1KG KhÔ GÀ BƠ TỎI...',
      nameShop: 'LTD Food',
      img: 'https://lzd-img-global.slatic.net/g/p/4189a3c6a2214c67d145926211dd0f99.jpg_360x360q75.jpg_.webp',
    },
    {
      id: '2',
      title: 'Xe cần cẩu đa năng',
      nameShop: 'Thế giới đồ chơi',
      img: 'https://gotrangtri.vn/wp-content/uploads/2019/12/xe-can-cau-do-choi-cho-tre-9.jpg',
    },
    {
      id: '3',
      title: 'Đồ chơi dạng mô hình',
      nameShop: 'Thế giới đồ chơi',
      img: 'https://cf.shopee.vn/file/2d8c8de63908911a21b11a20239f36a8',
    },
    {
      id: '4',
      title: 'Lãnh đạo giản đơn',
      nameShop: 'Minh Long Book',
      img: 'https://product.hstatic.net/1000237375/product/lang-dao-gian-don-900x900_3_7001f3146cc54c3c9e9320f8eef919fe.png',
    },
    {
      id: '5',
      title: 'Hiểu lòng con trẻ',
      nameShop: 'Minh Long Book',
      img: 'https://cdn0.fahasa.com/media/catalog/product/h/i/hieu_long_con_tre_tieu_hoc_1_2020_05_15_13_50_44.jpg',
    },
    {
      id: '6',
      title: 'Donal Trump Thiên tài lãnh đạo',
      nameShop: 'Minh Long Book',
      img: 'https://cdn0.fahasa.com/media/catalog/product/d/o/donald_trump___5_bai_hoc_kinh_doanh_dat_gia_1_2018_10_26_10_22_56.JPG',
    },

  ];

  const Item = ({i}) =>(
    <View style={{flexDirection:'row', flex:1, padding:5, borderTopWidth:1}}>
     
      <Image style={{ flex: 1, height:80,width:'auto', objectFit:'contain'}} source={{uri:i.img}}></Image>
      <View style={{ flex: 2, marginLeft:10}}>
        <Text style={{ fontWeight: 'bold' }}>{i.title}</Text>
        <View style={{flexDirection:'row', alignItems:'flex-end'}}>
          <Text style={{fontSize:12}}>Shop </Text>
          <Text style={{color:'red'}}>{i.nameShop}</Text>
        </View>
      </View>
      <View style={{ flex: 1, padding:13}}>
        <TouchableOpacity style={{backgroundColor:'red', flex:1, justifyContent:'center', alignItems:'center'}}
          onPress={() => setCount(++count)}
        >
          <Text style={{ color: 'white'}}>Chat</Text>
        </TouchableOpacity>
      </View>

    </View>
  )

  let { count, setCount } = React.useContext(MyContext);
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) =><Item i={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}