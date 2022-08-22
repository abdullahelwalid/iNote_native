import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./app/screens/Home";
import Login from "./app/screens/Login";

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Login">
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;
