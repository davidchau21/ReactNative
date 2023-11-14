import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function Screen1() {

  // let route = useRoute();
  // let { donut } = route.params;
  // let donutO = [];
  // donutO = donut.searchs;
  // let [valueSearch, setValueSearch] = React.useState("");
  // let [donutIn, setDonutIn] = React.useState(donutO);

  // const [data, setData] = useState([]);
  


  // React.useEffect(() => {
  //   let temp = donutO.filter((i) => {
  //     return i.desc.includes(valueSearch);
  //   });
  //   if (valueSearch != "") setUserIn(temp);
  //   else setUserIn(userO);
  // }, [valueSearch]);




  // let Item = ({i}) => (
  //   <View style={{flex:2, height:115, width:337, top:191, left:14, borderRadius:10}}>
      
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 20,
            color: "#000000A6",
            fontWeight: "bold",
            paddingTop: 5,
          }}
        >
          Welcome, Jala!
        </Text>
        <Text style={{ fontSize: 23, fontWeight: "bold" }}>
          Choise your Best food
        </Text>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TextInput
          style={{
            width: 266,
            height: 46,
            top: 10,
            borderWidth: 1,
            position: "absolute",
          }}
          placeholder="Search food"
        ></TextInput>

        <Image
          style={{
            width: 49,
            height: 47,
            position: "absolute",
            right: 10,
            top: 10,
            borderRadius: 10,
            resizeMode: "contain",
            backgroundColor: "#F1B000",
          }}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png",
          }}
        ></Image>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            width: 101,
            height: 35,
            backgroundColor: "#F1B000",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Donut</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 101,
            height: 35,
            backgroundColor: "#F1B000",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 15,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Pink Donut</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 101,
            height: 35,
            backgroundColor: "#F1B000",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 15,
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Floating</Text>
        </TouchableOpacity>
      </View>

      <FlatList style={{ flex: 7 }}
        
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});
