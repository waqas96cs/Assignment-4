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

const UserDetails = (props) => {
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
        Personal Information Of User
      </Text>
      <View style={styles.card}>
        <Text
          style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
        >
          Street: {props.street}
        </Text>
      </View>
      <View style={styles.card}>
        <Text
          style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
        >
          Suite: {props.suite}
        </Text>
      </View>
      <View style={styles.card}>
        <Text
          style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
        >
          City: {props.city}
        </Text>
      </View>
      <View style={styles.card}>
        <Text
          style={{ fontWeight: "bold", textAlign: "center", color: "white" }}
        >
          Company Name: {props.company}
        </Text>
      </View>
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
  card: {
    width: "90%",
    backgroundColor: "#007C7F",
    margin: 15,
    padding: 12,
  },
});

export default UserDetails;
