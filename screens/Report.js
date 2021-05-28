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
import { LokalizacjaRaport } from "../components/Inputs.js";
import { Eksportuj } from "../components/Buttons.js";
import { Table } from "../components/Table.js";
import { ScrollView } from "react-native-gesture-handler";
import {
  PasekNawigacyjny,
  PasekNawigacyjnyInfo,
} from "../components/PasekNawigacyjny.js";
import { Container } from "../components/Containers.js";

/**
 * Funkcja odpowiadająca za rozmieszczanie elementów na ekranie raportów
 * @function App
 */

export default function App() {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/tlo_raport.png")}
        style={styles.Tło}
      >
        <Container>
          <View style={styles.bezeksportu}>
            <View style={styles.paseknagorze}>
              <PasekNawigacyjnyInfo />
            </View>

            <View style={styles.naglowek}>
              <Image
                source={require("../assets/raport.png")}
                style={styles.h1}
              />
            </View>

            <View style={styles.nazwa}>
              <LokalizacjaRaport />
            </View>

            <View style={styles.tabelka}>
              <Table />
            </View>

            <View style={styles.button}>
              <Eksportuj />
            </View>
          </View>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}

/**
 * @type {styles}
 */

const styles = StyleSheet.create({
  /**
   * Rozmiary tła
   * @property {string} width - Szerokość
   * @property {string} height - Wysokość
   */
  Tło: {
    width: "100%",
    height: "100%",
  },
  /**
   * Wygląd górnego paska
   * @property {string} width - Szerokość
   * @property {string} flexDirection - Kierunek
   */
  paseknagorze: {
    width: "110%",
    flexDirection: "row",
  },
  /**
   * Wygląd nagłówku
   * @property {string} alignItems - Wyrównanie elementów
   */
  naglowek: {
    alignItems: "center",
  },
  /**
   * Rozmiar tekstu h1
   * @property {string} resizeMode - Tryb wyświetlania
   * @property {number} width - Szerokość
   */
  h1: {
    resizeMode: "contain",
    width: 200,
  },
  /**
   * Bez Eksportu?
   * @property {string} width - Szerokość
   * @property {string} height - Wysokość
   */
  bezeksportu: {
    width: "100%",
    height: "80%",
  },
  /**
   * Wygląd pola z nazwą
   * @property {string} width - Szerokość
   * @property {string} alignItems - Wyrównanie elementów
   * @property {number} height - Wysokość
   * @property {number} marginTop - Górny Margines
   * @property {string} margin - Margines
   */
  nazwa: {
    width: "80%",
    alignItems: "center",
    height: 53,
    marginTop: 30,
    margin: "10%",
  },
  /**
   * Wygląd tabelki
   * @property {string} width - Szerokość
   * @property {string} height - Wysokość
   * @property {string} marginLeft - Lewy Margines
   */
  tabelka: {
    width: "85%",
    marginLeft: "8%",
    height: "60%",
  },
  /**
   * Wygląd przycisku
   * @property {string} alignItems - Wyrównanie elementów
   */
  button: {
    alignItems: "center",
  },
});
