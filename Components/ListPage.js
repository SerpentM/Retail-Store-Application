import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Text,
} from "react-native";

export default function () {
  const [itemList, setItemList] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 23, 23, 23,
  ]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    const data = await fetch(
      "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/221fe602-4db5-4cb0-994b-94da996ab44c/assignment_json.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210821T070930Z&X-Amz-Expires=86400&X-Amz-Signature=f795399d2a356929fef34a7f181b045a8612813c01bb7ec2ceb279c2b2852614&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22assignment_json.json%22"
    );
    const item = await data.json();
  }
  console.log(itemList);
  return (
    <View style={styles.searchView}>
      <View style={styles.searchBar}>
        <TextInput placeholder="Search" style={styles.input}></TextInput>
        <Image
          source={{
            uri: "https://www.iconsdb.com/icons/preview/green/search-9-xl.png",
          }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={itemList}
          renderItem={(item) => (
            <View style={styles.listItem} key={item}>
              <Text style={styles.title}>U1_HARE KIRANA AND GENERAL Store</Text>
              <Text style={styles.area}>
                <Text style={styles.title}>Area:</Text> "HSR"
              </Text>
              <Text style={styles.address}>
                <Text style={styles.title}>Address: </Text> RADHA KISHAN HARE
                KIRANA AND GENERAL Ramghat Road, Vishnupuri, Near water tank,
                sector 5C, Agra, UP
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

styles = StyleSheet.create({
  searchView: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FEFFDE",
    alignItems: "center",
    margin: 0,
    padding: 0,
    paddingTop: 40,
    color: "#52734D",
  },
  searchBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 10,
  },
  input: {
    borderRadius: 50,
    borderColor: "#FF8252",
    width: "80%",
    height: 50,
    backgroundColor: "#DDFFBC",
    textAlign: "center",
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 35,
    width: 35,
    resizeMode: "stretch",
    alignItems: "center",
  },

  listItem: {
    margin: 20,
    width: "90%",
    height: "auto",
    backgroundColor: "#DDFFBC",
  },
  title: {
    fontSize: 18,
    padding: 15,
  },
  area: {
    padding: 15,
  },
  address: {
    padding: 15,
  },
});
