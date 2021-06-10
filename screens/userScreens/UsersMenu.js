import React from "react";
import { ImageBackground } from "react-native";
import { Tray } from "../../components/Trays";
import {
  UsersInfoButton,
  UserAddNewButton,
} from "../../components/RoundButtons";
import { PasekNawigacyjnyArticleMenu } from "../../components/PasekNawigacyjny.js";
import { Container } from "../../components/Containers";
import { ScrollView } from "react-native-gesture-handler";

/**
 * Ekran menu zarzadzania użytkownikami<br>
 * Za pomocą tego ekranu można wybrać użytkownika lub dodać nowego użytkownika
 * 
 * @function Ekran menu zarządzania użytkownikami
 * @param {object} navigation - Sterowanie stosem nawigacji
 * @category userScreens
 * @returns {JSX} Zwraca ekran menu zarządania użytkownikami w postaci elementu JSX
 */
export default function UsersMenu({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Tray composition="compact">
        {/* Pasek nawigujący do sekcji "Home" */}
        <PasekNawigacyjnyArticleMenu navigation={navigation} />
      </Tray>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Container spread="center" composition="compact">
          <Tray spread="center" composition="compact">
            <UsersInfoButton navigation={navigation} />
          </Tray>

          <Tray spread="center" composition="compact">
            <UserAddNewButton navigation={navigation} />
          </Tray>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
