import React, {Component, useState} from "react";
import {Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {PasekNawigacyjnyMenuLokalizacji} from '../../components/PasekNawigacyjny.js';
import { LocationInfoButton,LocationAddNewButton } from "../../components/RoundButtons.js";
import {Tray} from '../../components/Trays';


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
export default function LocationMenu({navigation}){
  return (
    <ImageBackground source={require('../../assets/tlo_dodawanie.png')} style={{flex: 1}}>


      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyMenuLokalizacji/>
      </View>

      <Tray composition='compact' spread='center'>
        <LocationInfoButton navigation={navigation}/>
      </Tray>

      <Tray composition='compact' spread='center'>
        <LocationAddNewButton navigation={navigation}/>
      </Tray>


    </ImageBackground>
  );
}

  const styles=StyleSheet.create({
    paseknagorze:{
      width: '100%',
      flexDirection: 'row',
      marginBottom: 50,
    }
  })