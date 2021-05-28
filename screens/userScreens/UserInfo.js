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

//Ekran Informacyjny Użytkownika, pokazuje informacje o użytkowniku i pozwala na przejście do korespondującego Panelu Edycji Użytkownika, oraz na Usunięcie użytkownika czy wysłanie możliwości na zmianę hasła
//navigation object - obiekt sterowania stosem nawigacji
export default function UserInfo({ navigation }) {
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

          <Tray spread="center" composition="loose">
            <ChangePasswordButton />
          </Tray>

          <Container composition="comact" spread="bottom">
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
