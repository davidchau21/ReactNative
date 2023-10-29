import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const data = [
  {
    imgUrl: require("../assets/img/ca_nau_lau.png"),
    title: "Ca nấu lẩu, nấu mì mini",
    shopName: "Devang",
  },
  {
    imgUrl: require("../assets/img/ga_bo_toi.png"),
    title: "1KG khô gà bơ tỏi",
    shopName: "LTD Food",
  },
  {
    imgUrl: require("../assets/img/xa_can_cau.png"),
    title: "Xe cần cẩu đa năng",
    shopName: "Thế giới đồ chơi",
  },
  {
    imgUrl: require("../assets/img/do_choi_dang_mo_hinh.png"),
    title: "Đồ chơi dạng mô hình",
    shopName: "Thế giới đồ chơi",
  },
  {
    imgUrl: require("../assets/img/lanh_dao_gian_don.png"),
    title: "Lãnh đạo giản đơn",
    shopName: "Minh Long Book",
  },
  {
    imgUrl: require("../assets/img/hieu_long_con_tre.png"),
    title: "Hiếu lòng con trẻ",
    shopName: "Minh Long Book",
  },
  {
    imgUrl: require("../assets/img/trump_1.png"),
    title: "Donald Trump ",
    shopName: "Minh Long Book",
  },
  {
    imgUrl: require("../assets/img/tuoi-tre.jpeg"),
    title: "Tuổi trẻ đáng giá bao nhiêu",
    shopName: "Minh Long Book",
  },
  {
    imgUrl: require("../assets/img/dac-nhan-tam.png"),
    title: "Đắc nhân tâm",
    shopName: "Minh Long Book",
  },
];

export default function App() {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ScrollView>
        <Text
          style={{
            paddingHorizontal: "20px",
            paddingVertical: "10px",
            fontSize: 15,
          }}
        >
          Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop!
        </Text>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 5,
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={item.imgUrl}
                  style={{ width: "74px", height: "74px" }}
                />
                <View style={{ marginLeft: "10px", marginTop: "5px" }}>
                  <Text
                    style={{
                      fontSize: 15,
                      marginBottom: "10px",
                      width: "100%",
                    }}
                  >
                    {item.title}
                  </Text>
                  <Text
                    style={{ fontSize: 15, color: "red", fontWeight: "bold" }}
                  >
                    {item.shopName}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "red",
                    paddingVertical: "10px",
                    paddingHorizontal: "35px",
                    marginLeft: "auto",
                    marginRight: "30px",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 18 }}>Chat</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
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
