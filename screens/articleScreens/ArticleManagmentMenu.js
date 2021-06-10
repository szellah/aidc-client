import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Tray } from "../../components/Trays";
import {
  ArticleInfoButton,
  ReportsButton,
} from "../../components/RoundButtons";

import { PasekNawigacyjny } from "../../components/PasekNawigacyjny.js";
import { Container } from "../../components/Containers";
import { ScrollView } from "react-native-gesture-handler";

export default function ArticleManagmentMenu({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Tray composition="compact">
        {/* Pasek nawigujący do sekcji "Zarządzanie (Managment)" */}
        <PasekNawigacyjny />
      </Tray>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Container spread="center" composition="compact">
          {/* Przyciski w menu "Zarządzanie (Managment)" nawigujące do nowych sekcji  */}
          <Tray spread="center" composition="compact">
            <ArticleInfoButton navigation={navigation} />
          </Tray>
          <Tray spread="center" composition="compact">
            <ReportsButton navigation={navigation} />
          </Tray>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
