import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import LoginPage from "./Components/LoginPage";
import ListPage from "./Components/ListPage";
export default function App() {
  const userDatabase = { username: "prashantKing", password: "aditiPagal" };
  const [userinfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [logState, setLogState] = useState(false);
  function handleChange1(evt) {
    setUserInfo((preValue) => ({ ...preValue, username: evt }));
  }
  function handleChange2(evt) {
    setUserInfo((preValue) => ({ ...preValue, password: evt }));
  }
  function handleSubmit() {
    if (
      userinfo.username === userDatabase.username &&
      userinfo.password === userDatabase.password
    ) {
      setLogState(true);
    } else {
      setLogState(false);
      alert("Incorrect ID Password");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {logState ? (
        <ListPage />
      ) : (
        <LoginPage
          change={handleChange1}
          change2={handleChange2}
          handleSubmit={handleSubmit}
        />
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
