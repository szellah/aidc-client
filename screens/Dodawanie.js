import React, {Component, useState} from "react";
import {Button, StyleSheet, Text, View, Image, ImageBackground, TextInput} from "react-native";
import tlo from "../assets/homePage/tempBackground.png";
import {PoleNazwa, PoleKategoria, PoleLokalizacja, PoleKod, PoleOpis} from '../components/Inputs.js';
import {Dodaj} from '../components/Buttons.js';
import {PasekNawigacyjny} from '../components/PasekNawigacyjny.js';
import {ChooseSectionButton} from '../components/ChooseSectionButton';

/** 
 * Funkcja odpowiadająca za rozmieszczanie elementów na ekranie dodawania
 * @function App
 */
export default function App(){
  return (
    <ImageBackground source={require('../assets/tlo dodawanie.png')} style={styles.Tło}>
    <View style={styles.Tło}>
      <View style={styles.paseknagorze}>
        <PasekNawigacyjny/>
      </View>
      <View style={styles.nazwa}>
        <PoleNazwa/>
      </View>
        
      <View style={styles.nazwa}>
        {/*<PoleKategoria/>*/}
        <ChooseSectionButton />
      </View>

      <View style={styles.nazwa}>
        <PoleLokalizacja/>
      </View>

      <View style={styles.nazwa}>
        <PoleKod/>
      </View>

      <View style={styles.opis}>
        <PoleOpis/>
      </View>

      <View style={styles.button}>
        <Dodaj/>
      </View>

    </View>
    </ImageBackground>
  );
}
  /**
   * @typedef {Object} styles
   * @property {string|number} width - Szerokość
   * @property {string} flexDirection - Kierunek
   * @property {string|number} marginBottom - Dolny margines
   * @property {string|number} marginLeft - Lewy margines
   * @property {string|number} marginRight - Prawy margines
   * @property {string|number} marginTop - Górny Margines
   * @property {string} resizeMode - Tryb wyświetlania
   * @property {string|number} height - Wysokość
   * @property {string} alignItems - Wyrównanie elementów
   * @property {string|number} margin - Margines
   */

  /**
   * @type {styles}
   */
  const styles=StyleSheet.create({
	/**
	 * Wygląd górnego paska
	 * @property {string} width - Szerokość
	 * @property {string} flexDirection - Kierunek
	 * @property {number} marginBottom - Dolny Margines
	 */
    paseknagorze:{
      width: '100%',
      flexDirection: 'row',
      marginBottom: 40,
    },
	/**
	 * Wygląd pola z nazwą
	 * @property {string} width - Szerokość
	 * @property {string} marginLeft - Kierunek
	 * @property {string} marginBottom - Dolny Margines
	 * @property {number} height - Wysokość
	 */
    nazwa:
    {
      width: "80%",
      marginLeft: "10%",
      marginBottom: "5%",
      height: 47,
    },
	/**
	 * Wygląd przycisku
	 * @property {string} alignItems - Wyrównanie elementów
	 * @property {string} margin - Margines
	 * @property {string} height - Wysokość
	 */
    button:
    {
      alignItems: "center",
      margin: "5%",
      height: "40%",
    },
	/**
	 * Rozmiary pola z opisem
	 * @property {string} width - Szerokość
	 * @property {string} height - Wysokość
	 * @property {string} alignItems - Wyrównanie elementów
	 * @property {number} marginLeft - Lewy Margines
	 */
    opis:
    {
      width: "80%",
      height: "30%",
      alignItems: "flex-start",
      marginLeft: "10%",
    },
	/**
	 * Rozmiary tła
	 * @property {string} width - Szerokość
	 * @property {string} height - Wysokość
	 */
    Tło: {
      width: '100%',
      height: '100%',      
    },
  })
