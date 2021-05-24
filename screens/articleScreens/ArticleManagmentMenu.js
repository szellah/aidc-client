import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Tray } from "../../components/Trays";
import { ArticleInfoButton, ReportsButton } from "../../components/RoundButtons";

import { PasekNawigacyjny } from "../../components/PasekNawigacyjny.js";

export default function ArticleManagmentMenu({ navigation }) {
  return (
    <>
      <Tray composition="compact">
        {/* Pasek nawigujący do sekcji "Zarządzanie (Managment)" */}
        <PasekNawigacyjny />
      </Tray>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        {/* Przyciski w menu "Zarządzanie (Managment)" nawigujące do nowych sekcji  */}
        <Tray spread="center" composition="compact">
          <ArticleInfoButton navigation={navigation} />
        </Tray>
        <Tray spread="center" composition="compact">
          <ReportsButton navigation={navigation} />
        </Tray>
      </ImageBackground>
    </>
  );
}
