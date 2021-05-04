import React, {Component, useState} from "react";
import { Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {Tray} from '../components/Trays';
import {PasekNawigacyjny, PasekNawigacyjnyInfo} from '../components/PasekNawigacyjny.js';
import {ChangePasswordButton, DeleteAccountButton, InformationButton} from '../components/RoundButtons';

const kliknij = (text) => {
    console.log(text);
}

export default function Settings({navigation}){
  return (
  //<ScrollView>
  <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={styles.Tło}>
    <View style={styles.bezeksportu}>

      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyInfo/>
      </View>

      <Tray spread="center" composition="compactMarginTop">
        <ChangePasswordButton
        navigation={navigation}
        />
        <InformationButton
        navigation={navigation}
        />
      </Tray>
      <Tray spread="center" composition="compact">
        <DeleteAccountButton
        navigation={navigation}
        />
      </Tray>

    </View>
  </ImageBackground>
  //</ScrollView>
  );
}
  const styles=StyleSheet.create({
    Tło: {
      width: '100%',
      height: '100%',      
    },
    paseknagorze:{
      width: '110%',
      flexDirection: 'row',
    },
    bezeksportu:{
        width: '100%',
        height: '80%',      
    }
  })