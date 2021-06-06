import React, {Component, useState} from "react";
import { Button, StyleSheet, Text, View, Image, ImageBackground, TextInput, ScrollView} from "react-native";
import {Tray} from '../../components/Trays';
import {PasekNawigacyjny,PasekNawigacyjnyInfo} from '../../components/PasekNawigacyjny.js';
import {UserFirstnameInput, UserEmailInput, UserLoginInput, UserSurnameInput, UserStateInput, UserRankInput} from '../../components/Inputs.js';
import {SaveButton, CancelButton} from "../../components/Buttons";
import { Container } from "../../components/Containers";

/**
 * Ekran edycji użytkownika<br>
 * W tym ekranie można zmieniać dane użytkownika, co spowoduje edycję obecnych danych lub dodanie użytkownika
 * @function Ekran edycji użytkownika
 * @param {object} navigation - Sterowanie stosem nawigacji
 * @category userScreens
 * @returns {JSX} Zwraca ekran edycji użytkownika w postaci elementu JSX
 */
export default function UserEdit({navigation}){
  return (

  <ImageBackground source={require('../../assets/tlo_dodawanie.png')} style={styles.Tło}>
      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyInfo/>
      </View>


        <UserFirstnameInput/>

        <UserSurnameInput/>

        <UserLoginInput/>

        <UserEmailInput/>

        <UserStateInput/>

        <UserRankInput/>

        <Container composition="comact" spread="bottom">
          <Tray spread="even" composition="loose">
              <SaveButton/>
              <CancelButton/>
          </Tray>
        </Container>
        
  </ImageBackground>

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