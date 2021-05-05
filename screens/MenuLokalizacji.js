import React, {Component, useState} from "react";
import {Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {PasekNawigacyjnyMenuLokalizacji} from '../components/PasekNawigacyjny.js';
import { InfoButton,PlusButton } from "../components/RoundButtons.js";
export default function App(){
  return (
    <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={styles.Tło}>
    <View style={styles.Tło}>
      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyMenuLokalizacji/>
      </View>
      <View style={styles.button}>
        <InfoButton/>
      </View>
      <View style={styles.button}>
        <PlusButton/>
      </View>
    </View>
    </ImageBackground>
  );
}

  const styles=StyleSheet.create({
    paseknagorze:{
      width: '100%',
      flexDirection: 'row',
      marginBottom: 50,
    },

 
    button:
    {
     
      alignItems: "center",
      top:'10%',
      height: "32%",
    },

    Tło: {
      width: '100%',
      height: '100%',      
    },
    tekst: {
      position: "absolute",
      left: '60%',
      top:'1%',
      color: 'black',
      textAlign:'right',
      fontSize: 25,
      color:'white',
      
     

     

    }
  })