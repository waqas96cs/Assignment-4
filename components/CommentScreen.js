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
  Container,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const CommentScreen = ({ navigation, route }) => {
  const [getData, setData] = React.useState([]);

  React.useEffect(() => {
    APICall();
  }, []);

  const APICall = () => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${route.params.userId}/comments`,
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
        User Post
      </Text>
      <TouchableOpacity style={styles.card}>
        <View style={{ paddingLeft: 5, paddingRight: 10 }}>
          <Text style={styles.info}>{route.params.title}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.info}>{route.params.body}</Text>
      </View>
      <Text style={{ textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
        Comments
      </Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={getData}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

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
  },
  card: {
    margin: 5,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
  },
});

export default CommentScreen;
