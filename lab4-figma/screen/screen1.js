import React from 'react';

import {Text, View} from 'react-native';

import { BodyList } from '../components/list'
import { MyContext } from '../App';

export default function Screen1() {
  let {count,setCount}=React.useContext(MyContext);
   return (
      <View style={{flex:1}}>
       <Text style={{ flex: 1, padding: 20 }}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngần ngại chát với shop! {count}</Text>
       <BodyList></BodyList>
      </View>
  );
}