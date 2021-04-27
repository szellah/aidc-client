import React, {Component, useState} from "react";
import {Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import tlo from "../assets/homePage/tempBackground.png";
import {PoleNazwa, PoleKategoria, PoleLokalizacja, PoleKod, PoleOpis} from '../components/Inputs.js';
import {Dodaj} from '../components/Buttons.js';
import {PasekNawigacyjny} from '../components/PasekNawigacyjny.js';
import {ChooseSectionButton} from '../components/ChooseSectionButton';

export default function App(){
  return (
    <ImageBackground source={require('../assets/tlo dodawanie.png')} style={styles.Tło}>
    <View style={styles.Tło}>
      <View style={styles.paseknagorze}>
        <PasekNawigacyjny/>
      </View>
      <View style={styles.nazwa}>
        <PoleNazwa/>
      </View>
        
      <View style={styles.nazwa}>
        {/*<PoleKategoria/>*/}
        <ChooseSectionButton />
      </View>

      <View style={styles.nazwa}>
        <PoleLokalizacja/>
      </View>

      <View style={styles.nazwa}>
        <PoleKod/>
      </View>

      <View style={styles.opis}>
        <PoleOpis/>
      </View>

      <View style={styles.button}>
        <Dodaj/>
      </View>

    </View>
    </ImageBackground>
  );
}

  const styles=StyleSheet.create({
    paseknagorze:{
      width: '100%',
      flexDirection: 'row',
      marginBottom: 40,
    },

    nazwa:
    {
      width: "80%",
      marginLeft: "10%",
      marginBottom: "5%",
      height: 47,
    },

    button:
    {
      alignItems: "center",
      margin: "5%",
      height: "40%",
    },

    opis:
    {
      width: "80%",
      height: "30%",
      alignItems: "flex-start",
      marginLeft: "10%",
    },

    Tło: {
      width: '100%',
      height: '100%',      
    },
  })
