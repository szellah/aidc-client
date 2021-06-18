import React, { Component, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { Container } from "../../components/Containers.js";
import { PasekNawigacyjnyMenuLokalizacji } from "../../components/PasekNawigacyjny.js";
import {
  LocationInfoButton,
  LocationAddNewButton,
} from "../../components/RoundButtons.js";
import { Tray } from "../../components/Trays";
import { ScrollView } from "react-native-gesture-handler";

/**
 * Ekran Menu Lokalizacji<br>
 * Pozwala na przemieszczenie się do Ekranu pozwalającego na dodanie nowej lokalizacji lub też
 * ekranu skanownia w celu wyświtlenia informacji o skanowanej lokalizacji
 * Można do niej przejść wybierając przycisk Lokalizacja w głównym Menu
 * 
 * @function LocationMenu
 * 
 * @category Screens
 * 
 * @returns {JSX} Zwraca ekran menu lokalizacji w postaci elmentu JSX
 */



let nav = {}


export default function LocationMenu({ navigation }) {

  nav = navigation


  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Tray composition="compact">
        {/* Pasek nawigujący do sekcji "Home" */}
        {/* <PasekNawigacyjnyMenuLokalizacji navigation={navigation} /> */}
      </Tray>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Container spread="center" composition="compact">
          <Tray composition="compact" spread="center">
            <LocationInfoButton navigation={navigation} />
          </Tray>

          <Tray composition="compact" spread="center">
            <LocationAddNewButton navigation={navigation} />
          </Tray>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}


LocationMenu.navigationOptions = {
  headerTitle: () => <PasekNawigacyjnyMenuLokalizacji navigation={nav}/>,
  headerLeft: () => {return null;}

}
const styles = StyleSheet.create({
  paseknagorze: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 50,
  },
});
