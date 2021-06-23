import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen2 from "./components/Screen2";
import CommentScreen from "./components/CommentScreen";
import HomeScreen from "./components/HomeScreen";
import Posts from "./components/Posts";
import AlbumPhotos from "./components/Photos";
import PhotoDetails from "./components/PhotoDetails";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Users",
            headerTitleAlign: "center",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "grey",
            },
          }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{
            headerTitle: "Details Screen",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="CommentScreen"
          component={CommentScreen}
          options={{
            headerTitle: "Posts Comments",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="AlbumPhotos"
          component={AlbumPhotos}
          options={{
            headerTitle: "Album Photos",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="PhotoDetails"
          component={PhotoDetails}
          options={{
            headerTitle: "Photo Details",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
