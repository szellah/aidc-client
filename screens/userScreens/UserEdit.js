import React, { Component, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import { Tray } from "../../components/Trays";
import {
  PasekNawigacyjny,
  PasekNawigacyjnyInfo,
} from "../../components/PasekNawigacyjny.js";
import {
  UserFirstnameInput,
  UserEmailInput,
  UserLoginInput,
  UserSurnameInput,
  UserStateInput,
  UserRankInput,
} from "../../components/Inputs.js";
import { SaveButton, CancelButton } from "../../components/Buttons";
import { Container } from "../../components/Containers";

//Ekran Edycji Użytkownika, pozwala na wpisywanie dowolnych wartości a następnie na zatwierdzenie ich, odpowiednia funkcja łaczy się z serwerem korzystając z zapytania UPDATE aktualizuje dane, jeżeli użytkownik jest tworzony jako nowy korzysta z INSERT INTO
//navigation object - obiekt sterowania stosem nawigacji
export default function UserEdit({ navigation }) {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={styles.Tło}
      >
        <Container>
          <View style={styles.paseknagorze}>
            <PasekNawigacyjnyInfo />
          </View>

          <UserFirstnameInput />

          <UserSurnameInput />

          <UserLoginInput />

          <UserEmailInput />

          <UserStateInput />

          <UserRankInput />

          <Container composition="comact" spread="bottom">
            <Tray spread="even" composition="loose">
              <SaveButton />
              <CancelButton />
            </Tray>
          </Container>
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
  bezeksportu: {
    width: "100%",
    height: "80%",
  },
});
