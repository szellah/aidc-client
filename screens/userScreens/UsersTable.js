import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import {Table} from "../../components/Table";

/**
 * Ekran tabeli użytkowników<br>
 * Dzięki temu ekranowi można szybko wybrać konkretnego użytkownika<br>
 * Pobiera on z bazy danych użytkowników i podaje ich dane w tabelce
 * 
 * @function Ekran tabeli użytkowników
 * @param {object} navigation - Sterowanie stosem nawigacji
 * @category userScreens
 * @returns {JSX} Zwraca ekran tabeli użytkowników w postaci elementu JSX
 */
export default function UsersTable({ navigation }) {

  const users = [
  { column1: 'Imię', column2: 'Nazwisko', column3: 'Login', id: 'header'},    
  { column1: 'Tomasz', column2: 'Karolak', column3: 'TKarolak', id: '1'},
  { column1: 'Borys', column2: 'Szyc', column3: 'BSzyc', id: '2'},
];

  return (
    <ImageBackground
      source={require("../../assets/backgrounds/blue_quater.png")}
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