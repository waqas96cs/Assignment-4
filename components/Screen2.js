import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserDetails from "./UserDetails";
import Posts from "./Posts";
import Todos from "./Todos";
import Albums from "./Albums";

const Tab = createBottomTabNavigator();

function Screen2({ navigation, route }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="UserDetails"
        component={() => (
          <UserDetails
            street={route.params.street}
            suite={route.params.suite}
            city={route.params.city}
            company={route.params.company}
          />
        )}
      />
      <Tab.Screen
        name="Albums"
        component={() => (
          <Albums id={route.params.id} navigation={navigation} />
        )}
      />
      <Tab.Screen
        name="Posts"
        component={() => <Posts id={route.params.id} navigation={navigation} />}
      />
      <Tab.Screen
        name="Todos"
        component={() => <Todos id={route.params.id} />}
      />
    </Tab.Navigator>
  );
}

export default Screen2;
