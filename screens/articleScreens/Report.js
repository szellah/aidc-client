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
import { LocationCodeInput } from "../../components/Inputs.js";
import { ExportButton } from "../../components/Buttons.js";
import { Table } from "../../components/Table.js";
import {
  PasekNawigacyjny,
  PasekNawigacyjnyInfo,
} from "../../components/PasekNawigacyjny.js";
import { Container } from "../../components/Containers.js";

/**
 * Ekran Raportu<br>
 * Wyświetla się po naciśnięciu `Sporządź` w ekranie tworzenia raportu<br>
 * W zależnoności od danych które przyjdą z bazy danych może wyświetlać raport
 * z lokalizacji lub po kategorii.
 * @function Report
 * @category Screens
 * @returns {JSX}
 * Zwraca ekran z raportu w postaci elementu JSX
 */
export default function Report() {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/tlo_raport.png")}
        style={styles.Tło}
      >
        <Container>
          <View style={styles.bezeksportu}>
            <View style={styles.paseknagorze}>
              <PasekNawigacyjnyInfo />
            </View>

            <View style={styles.naglowek}>
              <Image
                source={require("../../assets/raport.png")}
                style={styles.h1}
              />
            </View>

            <View style={styles.nazwa}>
              <LocationCodeInput />
            </View>

            <View style={styles.tabelka}>
              <Table />
            </View>
            <Text> raz dwa </Text>
            <View style={styles.button}>
              <ExportButton/>
              
            </View>
          </View>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Tło: {
    width: "100%",
    height: "100%",
  },
  paseknagorze: {
    width: "110%",
    flexDirection: "row",
  },
  naglowek: {
    alignItems: "center",
  },
  h1: {
    resizeMode: "contain",
    width: 200,
  },
  bezeksportu: {
    width: "100%",
    height: "80%",
  },
  nazwa: {
    width: "80%",
    alignItems: "center",
    height: 53,
    marginTop: 30,
    margin: "10%",
  },
  tabelka: {
    width: "85%",
    marginLeft: "8%",
    height: "60%",
  },
  button: {
    alignItems: "center",
  },
});
