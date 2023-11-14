import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
export default function Screen2() {
  let route = useRoute();
  let { user } = route.params;
  let userO = [];
  userO = user.searchs;
  let [valueSearch, setValueSearch] = React.useState("");
  let [userIn, setUserIn] = React.useState(userO);
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [editedItemIndex, setEditedItemIndex] = useState(-1);
  const [deletedItemIndex, setDeletedItemIndex] = useState(-1);
  const [newItemName, setNewItemName] = useState("");

  const updateItemName = () => {
    if (editedItemIndex !== -1) {
      const updatedData = [...data];
      updatedData[editedItemIndex].desc = newItemName;

      fetch(
        `https://6540a02c45bedb25bfc23317.mockapi.io/api/v1/user/${updatedData[editedItemIndex].id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData[editedItemIndex]),
        }
      )
        .then((response) => response.json())
        .then(() => {
          setData(updatedData);
          setEditedItemIndex(-1);
          setNewItemName("");
        })
        .catch((error) => {
          console.error("error updating item", error);
        });
    }
  };
  

  const deleteItem = (index) => {
    const itemToDelete = data.find((item) => item.id === item.id);
    if (index != -1) {
      const itemToDelete = data[index];

      fetch(
        `https://6540a02c45bedb25bfc23317.mockapi.io/api/v1/user/${itemToDelete.id}`,
        {
          method: "DELETE",
        }
      )
        .then(() => {
          const updateData = data.filter((item) => item.id !== itemToDelete.id);
          setData(updateData);
        })
        .catch((error) => {
          console.error("error deleting item", error);
        });
    }
  };
  
  let Item = ({ i }) => (
    <View
      style={{
        flex: 1,
        height: 50,
        backgroundColor: "#6AEBF9",
        marginBottom: 10,
        borderRadius: 10,
        justifyContent: "center",
      }}
    >
      <Image
        style={{
          left: 10,
          width: 20,
          height: 20,
          resizeMode: "contain",
          position: "absolute",
        }}
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/5290/5290058.png",
        }}
      ></Image>
      <View
        style={{
          flex: 1,
          position: "absolute",
          right: 10,
          zIndex: 99,
          flexDirection: "row",
        }}
       
      >
        <TouchableOpacity onPress={() => deleteItem(index)}>
          <Image
            style={{ width: 20, height: 20, resizeMode: "contain" }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3405/3405244.png",
            }}
          ></Image>
        </TouchableOpacity>

        <TouchableOpacity onPress={updateItemName}>
          <Image
            style={{ width: 20, height: 20, resizeMode: "contain" }}
            source={require("./assets/edit.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{ flex: 1 }}>
        <Text style={{ flex: 1, padding: 20, marginLeft: 40 }}>{i.desc}</Text>
      </TouchableOpacity>
    </View>
  );

  React.useEffect(() => {
    let temp = userO.filter((i) => {
      return i.desc.includes(valueSearch);
    });
    if (valueSearch != "") setUserIn(temp);
    else setUserIn(userO);
  }, [valueSearch]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <TouchableOpacity
          style={{ paddingHorizontal: 10 }}
          onPress={() => {
            navigation.navigate("Screen1");
          }}
        >
          <Text style={{ color: "black", fontSize: 16 }}>Back</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: user.image }}
            style={{ height: 40, width: 40, borderRadius: 20, marginRight: 10 }}
          />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
              {user.name}
            </Text>
            <Text style={{ color: "gray", fontSize: 16, fontWeight: "500" }}>
              {user.description}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
        <Image
          style={{
            left: 10,
            width: 20,
            height: 20,
            resizeMode: "contain",
            position: "absolute",
          }}
          source={{
            uri:
              "https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg",
          }}
        ></Image>
        <TextInput
          style={{
            height: 40,
            flex: 1,
            borderRadius: 5,
            borderWidth: 1,
            paddingLeft: 40,
          }}
          placeholder="Search"
          onChangeText={setValueSearch}
        ></TextInput>
      </View>
      <View style={{ flex: 1 }}></View>

      <FlatList
        style={{ flex: 7 }}
        data={userIn}
        renderItem={({ item }) => <Item i={item}></Item>}
      ></FlatList>

      <TouchableOpacity
        style={{
          borderRadius: 1000,
          flex: 1,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          width: "30%",
          alignSelf: "center",
        }}
        onPress={() => {
          navigation.navigate("Screen3");
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", color: "white" }}>
          +
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 3 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
});
