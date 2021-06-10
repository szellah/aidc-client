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
import {
  EditButton,
  DeleteButton,
  ChangePasswordButton,
} from "../../components/Buttons";
import { Container } from "../../components/Containers";

/**
 * Ekran informacyjny użytkownika<br>
 * Ten ekran pozwala na:
 * - pokazanie informacji o użytkowniku
 * - przejście do korespondującego panelu edycji użytkownika
 * - usunięcie użytkownika
 * - wysłanie możliwości na zmianę hasła
 * 
 * @function Ekran informacyjny użytkownika
 * @param {object} navigation - Sterowanie stosem nawigacji
 * @category userScreens
 * @returns {JSX} Zwraca ekran informacyjny użytkownika w postaci elementu JSX
 */
export default function UserInfo({navigation}){
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Tray composition="compact">
        {/* Pasek nawigujący do sekcji */}
        <PasekNawigacyjnyInfo navigation={navigation} />
      </Tray>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Container spread="top" composition="comapct">
          <UserFirstnameInput />

          <UserSurnameInput />

          <UserLoginInput />

          <UserEmailInput />

          <UserStateInput />

          <UserRankInput />

          <Tray spread="center" composition="loose">
            <ChangePasswordButton />
          </Tray>

          <Container composition="compact" spread="bottom">
            <Tray spread="even" composition="loose">
              <EditButton />
              <DeleteButton />
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
