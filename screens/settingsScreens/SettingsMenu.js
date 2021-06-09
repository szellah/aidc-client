import React, {Component, useState} from "react";
import { Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import {Tray} from '../../components/Trays';
import {PasekNawigacyjny, PasekNawigacyjnyInfo} from '../../components/PasekNawigacyjny.js';
import {ChangePasswordButton, DeleteAccountButton, AccountInfoButton} from '../../components/RoundButtons';
import { Container } from "../../components/Containers";

/**
 * @function
 * @param {object} text
 */
const kliknij = (text) => {
    console.log(text);
}
/**
 * Ekran ustawień<br>
 * Pozwala na:
 * - Wyświetlenie informacji o koncie użytkownika
 * - Przejście do ekranu zmiany haseł
 * - Rozpoczęcie procesu usuwania konta
 * @function SettingsMenu
 * @param {object} navigation Pozwala na przenosznie się między ekranami
 *
 * @category Screens
 *
 * @returns {JSX} Zwraca ekran ustawień w postaci elmentu JSX
 */

export default function SettingsMenu({navigation}){
  return (
  //<ScrollView>
  <ImageBackground source={require('../../assets/tlo_dodawanie.png')} style={styles.Tło}>

      <View style={styles.paseknagorze}>
        <PasekNawigacyjnyInfo/>
      </View>


<Container spread="center" composition="loose">
      <Tray spread="center" composition="compact">
        <ChangePasswordButton
        navigation={navigation}
        />
        <AccountInfoButton
        navigation={navigation}
        />
      </Tray>
      <Tray spread="center" composition="compact">
        <DeleteAccountButton
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
    }
  })