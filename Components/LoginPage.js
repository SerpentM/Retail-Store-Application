import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginPage(props) {
  return (
    <SafeAreaView style={styles.loginContainer}>
      <View>
        <Text style={styles.top}>Serpent</Text>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.form}>
          <Text style={styles.placeH}>User Name</Text>
          <TextInput
            placeholder="User Name"
            style={styles.input}
            onChangeText={props.change}
          ></TextInput>
          <Text style={styles.placeH}>Password</Text>
          <TextInput
            placeholder="Password"
            style={styles.input}
            onChangeText={props.change2}
          ></TextInput>
          <TouchableOpacity onPress={props.handleSubmit}>
            <Text style={styles.button2}> Login </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FEFFDE",
    alignItems: "center",
    paddingTop: 100,
    color: "#52734D",
  },
  top: {
    fontWeight: "900",
    fontSize: 40,
    color: "#52734D",
  },
  bottomView: {
    marginTop: 100,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "80%",
    paddingLeft: 10,
  },
  input: {
    borderRadius: 50,
    borderColor: "#FF8252",
    width: 280,
    height: 50,
    backgroundColor: "#DDFFBC",
    marginBottom: 10,
    textAlign: "center",
  },
  button2: {
    borderRadius: 50,
    width: 200,
    height: 50,
    marginTop: 20,
    textAlign: "center",
    color: "#FFF",
    textAlignVertical: "center",
    backgroundColor: "#91C788",
    fontSize: 20,
    textShadowRadius: 10,
    alignSelf: "center",
  },
  placeH: {
    fontSize: 20,
    alignSelf: "center",
    paddingBottom: 20,
    color: "#52734D",
  },
});
