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
import { Container } from "../../components/Containers.js";
import { PasekNawigacyjnyMenuLokalizacji } from "../../components/PasekNawigacyjny.js";
import {
  LocationInfoButton,
  LocationAddNewButton,
} from "../../components/RoundButtons.js";
import { Tray } from "../../components/Trays";
import { ScrollView } from "react-native-gesture-handler";

export default function LocationMenu({ navigation }) {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1 }}
      >
        <Container>
          <View style={styles.paseknagorze}>
            <PasekNawigacyjnyMenuLokalizacji />
          </View>

          <Tray composition="compact" spread="center">
            <LocationInfoButton navigation={navigation} />
          </Tray>

          <Tray composition="compact" spread="center">
            <LocationAddNewButton navigation={navigation} />
          </Tray>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  paseknagorze: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 50,
  },
});
