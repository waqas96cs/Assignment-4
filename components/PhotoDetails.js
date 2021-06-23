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
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const PhotoDetails = ({ navigation, route }) => {
  return (
    <View
      style={{
        margin: 5,
        backgroundColor: "white",
        borderRadius: 8,
        padding: 8,
      }}
    >
      <View
        style={{ paddingLeft: 5, paddingRight: 10, flexDirection: "column" }}
      >
        <Image
          style={{ height: 200, width: "100%" }}
          source={{
            uri: `${route.params.url}`,
          }}
        />
        <Text style={styles.info}>{route.params.title}</Text>
      </View>
    </View>
  );
};

export default PhotoDetails;

const styles = StyleSheet.create({
  info: {
    fontWeight: "bold",
    color: "black",
  },
});
