import React, { Component, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import tlo from "../assets/homePage/tempBackground.png";
import {
  NameInput,
  PoleKategoria,
  LocationCodeInput,
  ArticleCodeInput,
  DescriptionInput,
} from "../components/Inputs.js";
import { Dodaj } from "../components/Buttons.js";
import { PasekNawigacyjny } from "../components/PasekNawigacyjny.js";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "../components/Containers";

/**
 * Funkcja odpowiadająca za rozmieszczanie elementów na ekranie dodawania
 * @function App
 */
export default function App() {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/tlo_dodawanie.png")}
        style={styles.Tło}
      >
        <Container>
          <View style={styles.Tło}>
            <View style={styles.paseknagorze}>
              <PasekNawigacyjny />
            </View>
            <View style={styles.nazwa}>
              <NameInput />
            </View>

            <View style={styles.nazwa}>{/*<PoleKategoria/>*/}</View>

            <View style={styles.nazwa}>
              <LocationCodeInput />
            </View>

            <View style={styles.nazwa}>
              <ArticleCodeInput />
            </View>

            <View style={styles.opis}>
              <DescriptionInput />
            </View>

            <View style={styles.button}>{/*<Dodaj/>*/}</View>
          </View>
        </Container>
      </ImageBackground>
    </ScrollView>
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
const styles = StyleSheet.create({
  /**
   * Wygląd górnego paska
   * @property {string} width - Szerokość
   * @property {string} flexDirection - Kierunek
   * @property {number} marginBottom - Dolny Margines
   */
  paseknagorze: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 40,
  },
  /**
   * Wygląd pola z nazwą
   * @property {string} width - Szerokość
   * @property {string} marginLeft - Kierunek
   * @property {string} marginBottom - Dolny Margines
   * @property {number} height - Wysokość
   */
  nazwa: {
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
  button: {
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
  opis: {
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
    width: "100%",
    height: "100%",
  },
});
