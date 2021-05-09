import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import {Table} from "../components/Table";

const kliknij = (text) => {
  console.log(text);
};

export default function Test({ navigation }) {

  const users = [
  { row1: 'Imię', row2: 'Nazwisko', row3: 'Login', id: 'header'},    
  { row1: 'Tomasz', row2: 'Karolak', row3: 'TKarolak', id: '1'},
  { row1: 'Borys', row2: 'Szyc', row3: 'BSzyc', id: '2'},
];

  return (
    <ImageBackground
      source={require("../assets/loginPage/LoginBackground.png")}
      style={{ flex: 1 }}
    >

    <View style={styles.titleBox}>
      <Text style={styles.title}>UŻYTKOWNICY</Text>
    </View>
      
    <Table toDisplay={users} clickable={true} pressHandler={(destination) => {
      navigation.navigate('UserPanelEdit');
    }}/>    
     


    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title:{
    color: "white",
    fontSize: 43,
    marginVertical: 10,
  },
  titleBox:{
    flexDirection: 'row',
    justifyContent: 'center',
    height: "20%",
  }
});