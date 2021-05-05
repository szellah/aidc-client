import React, {Component, useState} from "react";
import {Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {CancelButton,SaveButton} from '../components/Buttons.js';
import {PanelLokalizacjiZapiszAnuluj, PasekNawigacyjnyInfo} from '../components/PasekNawigacyjny.js';
import {FloorsSelect,BuildingSelect ,ArticleCodeInput,RoomSelect} from '../components/Inputs.js';

export default function App(){
  return (
    <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={styles.Tło}>
    <View style={styles.Tło}>
     
    <View style={styles.paseknagorze}>
        < PanelLokalizacjiZapiszAnuluj/>
      </View>
      <View style={styles.select} >
        <BuildingSelect/>
      </View>
      <View style={styles.select} >
        <FloorsSelect/>
      </View>
      <View style={styles.select} >
        <RoomSelect/>
      </View>
      <View style={styles.select} >
        <ArticleCodeInput/>
      </View>
     
     
      <View style={styles.save}>
        <SaveButton/>
      </View>
      <View style={styles.cancel}>
        <CancelButton/>
      </View>
    </View>
    </ImageBackground>
  );
}

  const styles=StyleSheet.create({
    paseknagorze:{
      width: '100%',
      flexDirection: 'row',
      
    },
    save: {
        position:"absolute",
        top:'90%',
        left:'2%',
        marginLeft:'3%',
 
    },
    select: {
        top:'25%',
        height:'10%',
        alignItems: "center",

    },
    cancel: {
        position:"absolute",
        top:'90%',
        right:'2%',
        marginRight:'3%'
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
      
      
     

     

    }
  })