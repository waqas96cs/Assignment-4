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

const Todos = (props, { navigation }) => {
  const [getData, setData] = React.useState([]);

  React.useEffect(() => {
    APICall();
  }, []);

  const APICall = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${props.id}/todos`, {
      method: "GET",
    })
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
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Users Tasks
      </Text>
      <FlatList
        style={{ marginTop: 10 }}
        data={getData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              margin: 5,
              backgroundColor: "#007C7F",
              flex: 1,
              borderRadius: 8,
              padding: 8,
            }}
          >
            <View style={{ paddingLeft: 5, paddingRight: 10 }}>
              <Text style={styles.info}>{item.title}</Text>
              <Text style={styles.info}>
                Completed Status: {item.completed == true ? "✅" : "❎"}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#7BA4DD",
    padding: 8,
  },
  info: {
    fontWeight: "bold",
    color: "white",
  },
});
