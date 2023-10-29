import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const data = [
  {
    imgUrl: require("../assets/img/giacchuyen_1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: 39,
    rating: 15,
  },
  {
    imgUrl: require("../assets/img/daynguon_1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: 39,
    rating: 15,
  },
  {
    imgUrl: require("../assets/img/dauchuyendoipsps2_1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: 39,
    rating: 15,
  },
  {
    imgUrl: require("../assets/img/dauchuyendoi_1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: 39,
    rating: 15,
  },
  {
    imgUrl: require("../assets/img/carbusbtops2_1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: 39,
    rating: 15,
  },
  {
    imgUrl: require("../assets/img/daucam_1.png"),
    title: "Cáp chuyển từ Cổng USB sang PS2...",
    price: "69.900 đ",
    discount: 39,
    rating: 15,
  },
];

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View style={{ padding: 10, width: "50%" }}>
                <Image
                  source={item.imgUrl}
                  style={{
                    height: 100,
                    width: "auto",
                    objectFit: "contain",
                  }}
                ></Image>
                <View style={{ paddingLeft: "15px" }}>
                  <Text>{item.title}</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      name="star"
                      size={18}
                      style={{ color: "#ffd700", padding: "1px" }}
                    ></Icon>
                    <Icon
                      name="star"
                      size={18}
                      style={{ color: "#ffd700", padding: "1px" }}
                    ></Icon>
                    <Icon
                      name="star"
                      size={18}
                      style={{ color: "#ffd700", padding: "1px" }}
                    ></Icon>
                    <Icon
                      name="star"
                      size={18}
                      style={{ color: "#ffd700", padding: "1px" }}
                    ></Icon>
                    <Icon
                      name="star"
                      size={18}
                      style={{ color: "gray", padding: "1px" }}
                    ></Icon>
                    <Text>({item.rating})</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>
                      {item.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                      })}
                      {"   "}
                    </Text>
                    <Text>-{item.discount}%</Text>
                  </View>
                </View>
              </View>
            );
          }}
          numColumns={2}
        ></FlatList>
      </ScrollView>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingVertical: "12px",
        }}
      >
        <Icon name="bars" size={30}></Icon>
        <Icon name="home" size={30}></Icon>
        <Icon name="undo" size={30}></Icon>
      </View>
    </View>
  );
}
