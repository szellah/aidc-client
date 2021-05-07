import React, {Component, useState} from "react";
import { Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {Tray} from '../components/Trays';
import {PasekNawigacyjny,PasekNawigacyjnyInfo} from '../components/PasekNawigacyjny.js';
import {DeletYellowButton, CancelButton} from "../components/Buttons";
import {EnterPasswordInput, RepeatPasswordInput} from '../components/Inputs.js';

export default function DeleteAccount({navigation}){
  return (
  //<ScrollView>
  <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={styles.Tło}>
    <View style={styles.bezeksportu}>

      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyInfo/>
      </View>

      <Tray spread="center" composition="compactMarginTop"></Tray>
      <Tray spread="center" composition="compactMarginTop">
        <EnterPasswordInput/>
      </Tray>
      <Tray spread="center" composition="compact">
        <RepeatPasswordInput/>
      </Tray>
      <Tray spread="even" composition="bottom">
        <CancelButton 
        navigation={navigation}
        />
        <DeletYellowButton/>
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
    },
  })