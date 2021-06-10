import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Tray } from "../../components/Trays";
import {
  AddArticleButton,
  ManagmentButton,
  RemoveStockedArticleButton,
  AddStockedArticleButton,
} from "../../components/RoundButtons";

import { PasekNawigacyjnyArticleMenu } from "../../components/PasekNawigacyjny.js";
/**
 * Ekran menu towarów<br>
 * pozwala na wybranie jednego z czterech menu:<br>
 * - Zarządzanie<br>
 * - Dodaj nowy Towar<br>
 * - Dodaj już istniejący Towar<br>
 * - Usuń Towar
 * @function ArticleMenu
 * @param {object} navigation Pozwala na przenoszenie się między ekranami
 * @category Screens
 * @returns {JSX} zwraca Ekran menu towarów w postaci elementu JSX
 */
export default function ArticleMenu({ navigation }) {
  return (
    <>
      <Tray composition="compact">
        {/* Pasek nawigujący do sekcji "Home" */}
        <PasekNawigacyjnyArticleMenu navigation={navigation} />
      </Tray>

      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        {/* Przyciski w menu "Towar (Article)" nawigujące do nowych sekcji */}
        <Tray spread="center" composition="compact">
          <ManagmentButton navigation={navigation} />
          <AddArticleButton navigation={navigation} />
        </Tray>
        <Tray spread="center" composition="compact">
          <RemoveStockedArticleButton navigation={navigation} />
          <AddStockedArticleButton navigation={navigation} />
        </Tray>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({});
