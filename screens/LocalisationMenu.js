import React, {Component, useState} from "react";
import {Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {PasekNawigacyjnyMenuLokalizacji} from '../components/PasekNawigacyjny.js';
import { LocationInformationButton,LocationAddNewButton } from "../components/RoundButtons.js";
import {Tray} from '../components/Trays';

export default function LocalisationMenu({navigation}){
  return (
    <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={{flex: 1}}>


      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyMenuLokalizacji/>
      </View>

      <Tray composition='compact' spread='center'>
        <LocationInformationButton navigation={navigation}/>
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