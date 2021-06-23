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

const HomeScreen = ({ navigation }) => {
  const [getData, setData] = React.useState([]);

  React.useEffect(() => {
    APICall();
  }, []);

  const APICall = () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
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
      <FlatList
        style={{ marginTop: 12 }}
        data={getData}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              margin: 6,
              backgroundColor: "#007C7F",
              flex: 1,
              padding: 3,
            }}
            onPress={() =>
              navigation.navigate("Screen2", {
                street: item.address["street"],
                suite: item.address["suite"],
                city: item.address["city"],
                company: item.company["name"],
                id: item.id,
              })
            }
          >
            <View style={{ paddingLeft: 5, paddingRight: 10 }}>
              <Text style={styles.info}>Name: {item.name}</Text>
              <Text style={styles.info}>Email: {item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

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

export default HomeScreen;
