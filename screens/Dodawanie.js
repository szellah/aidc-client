import React, {Component, useState} from "react";
import {Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import tlo from "../assets/homePage/tempBackground.png";
import {NameInput, PoleKategoria, LocationCodeInput, ArticleCodeInput, DescriptionInput} from '../components/Inputs.js';
import {Dodaj} from '../components/Buttons.js';
import {PasekNawigacyjny} from '../components/PasekNawigacyjny.js';

export default function App(){
  return (
    <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={styles.Tło}>
    <View style={styles.Tło}>
      <View style={styles.paseknagorze}>
        <PasekNawigacyjny/>
      </View>
      <View style={styles.nazwa}>
        <NameInput/>
      </View>
        
      <View style={styles.nazwa}>
        {/*<PoleKategoria/>*/}
      </View>

      <View style={styles.nazwa}>
        <LocationCodeInput/>
      </View>

      <View style={styles.nazwa}>
        <ArticleCodeInput/>
      </View>

      <View style={styles.opis}>
        <DescriptionInput/>
      </View>

      <View style={styles.button}>
        {/*<Dodaj/>*/}
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
