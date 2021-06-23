import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
  Card,
  CardItem,
  Body,
  Header,
  Content,
  Image,
  Container,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AlbumPhotos = ({ navigation, route }) => {
  const [getData, setData] = React.useState([]);

  React.useEffect(() => {
    APICall();
  }, []);

  const APICall = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums/${route.params.id}/photos`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setData(responseJson);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
        Albums Photos
      </Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={getData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              margin: 5,
              backgroundColor: "white",
              flex: 1,
              borderRadius: 8,
              padding: 8,
            }}
            onPress={() =>
              navigation.navigate("PhotoDetails", {
                url: item.url,
                title: item.title,
              })
            }
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Image
                style={{ height: 100, width: 100 }}
                source={{
                  uri: `${item.url}`,
                }}
              />
              <Text style={styles.info}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default AlbumPhotos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  info: {
    fontWeight: "bold",
    color: "black",
    paddingLeft: 5,
  },
});
