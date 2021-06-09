import React, {Component, useState} from "react";
import {Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {PasekNawigacyjnyMenuLokalizacji} from '../components/PasekNawigacyjny.js';
import { InfoButton,PlusButton } from "../components/RoundButtons.js";
import {Tray} from '../components/Trays';

export default function App(){
  return (
    <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={{flex: 1}}>


      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyMenuLokalizacji/>
      </View>

      <Tray composition='compact' spread='center'>
        <InfoButton/>
      </Tray>

      <Tray composition='compact' spread='center'>
        <PlusButton/>
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