import React, {Component, useState} from "react";
import { Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {Tray} from '../../components/Trays';
import {PasekNawigacyjny,PasekNawigacyjnyInfo} from '../../components/PasekNawigacyjny.js';
import {DeletYellowButton, CancelButton} from "../../components/Buttons";
import {EnterPasswordInput, RepeatPasswordInput} from '../../components/Inputs.js';
import { Container } from "../../components/Containers";

/**
 * Ekran usuwania konta<br>
 * Wyświetla się po wywołaniu w ekranie ustawień<br>
 * Należy:
 * - Wpisać dwukronie hasło użytkownika
 * - Zatwierdzić bądź anulować operację
 * @function
 * @param {object} navigation Pozwala na przenosznie się między ekranami
 *
 * @category Screens
 *
 * @returns {JSX} Zwraca ekran usuwania konta w postaci elmentu JSX
 */

export const DeleteAccount = ({navigation}) => {
  return (
  //<ScrollView>
  <ImageBackground source={require('../../assets/tlo_dodawanie.png')} style={styles.Tło}>

      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyInfo/>
      </View>


    <Container composition="loose" spread="top">
      <Tray spread="center" composition="compact">
        <EnterPasswordInput/>
      </Tray>
      <Tray spread="center" composition="compact">
        <RepeatPasswordInput/>
      </Tray>
    </Container>

    <Container composition="loose" spread="bottom">
      <Tray spread="even" composition="compact">
        <CancelButton 
        navigation={navigation}
        />
        <DeletYellowButton/>
      </Tray>
    </Container>

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