import React, {Component, useState} from "react";
import { Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {Tray} from '../../components/Trays';
import {PasekNawigacyjny,PasekNawigacyjnyInfo} from '../../components/PasekNawigacyjny.js';
import {EnterNewPasswordInput, EnterOldPasswordInput, RepeatNewPasswordInput} from '../../components/Inputs.js';
import {ChangeButton, CancelButton} from "../../components/Buttons";
import { Container } from "../../components/Containers";

/**
 * Ekran zmiany hasła<br>
 * Wyświetla się po wywołaniu w ekranie ustawień<br>
 * Należy:
 * - Wpisać bieżące hasło
 * - Wpisać dwukrotnie nowe hasło
 * - Zatwierdzić bądź anulować operację
 * @function
 * @param {object} navigation Pozwala na przenosznie się między ekranami
 *
 * @category Screens
 *
 * @returns {JSX} Zwraca ekran zmiany hasła w postaci elmentu JSX
 */

export const ChangePassword = ({navigation}) => {
  return (
  //<ScrollView>
  <ImageBackground source={require('../../assets/tlo_dodawanie.png')} style={styles.Tło}>
 

      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyInfo/>
      </View>


    <Container composition="loose" spread="top">
      <Tray spread="center" composition="compact">
        <EnterNewPasswordInput/>
      </Tray>
      <Tray spread="center" composition="compact">
        <EnterOldPasswordInput/>
      </Tray>
      <Tray spread="center" composition="compact">
        <RepeatNewPasswordInput/>
      </Tray>
    </Container>
    <Container composition="loose" spread="bottom">
      <Tray spread="even" composition="loose">
        <ChangeButton/>
        <CancelButton 
        navigation={navigation}
        />
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