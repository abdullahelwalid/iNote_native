import React, { useState } from "react";
import {
  Button,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

function Login({ navigation }) {
  const [borderColorU, setBorderColorU] = useState("black");
  const [borderColorP, setBorderColorP] = useState("black");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.inputContainer}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.OS === "android" ? -250 : 0}
          behavior="padding"
          enabled
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.logo}>INote</Text>
            <TextInput
              placeholder="username"
              textAlign="center"
              style={[styles.input, { borderColor: borderColorU }]}
              onFocus={() => {
                setBorderColorU("blue");
              }}
              value={username}
              onChangeText={setUsername}
              onBlur={() => {
                setBorderColorU("black");
              }}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              textAlign="center"
              value={password}
              onChangeText={setPassword}
              style={[styles.input, { borderColor: borderColorP }]}
              onFocus={() => {
                setBorderColorP("blue");
              }}
              onBlur={() => {
                setBorderColorP("black");
              }}
            />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Home");
              }}
              disabled={password && username ? false : true}
              style={[styles.button,{
                backgroundColor: password && username ? "#577BC1" : "#F9F9F9",
              }]}
            >
              <Text style={{ alignSelf: "center", color: password && username ? "white" : "black" }}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 30,
    justifyContent: "center",
    borderRadius: 10,
    marginTop: "10%"
  },
  input: {
    backgroundColor: "#E8F9FD",
    width: 200,
    height: 50,
    fontSize: 16,
    margin: "3%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    padding: "2%",
  },
  inputContainer: {
    backgroundColor: "#C1EFFF",
    // marginTop: "15%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontSize: 50,
  },
});
export default Login;
