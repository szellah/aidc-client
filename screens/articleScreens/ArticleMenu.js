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
import { Container } from "../../components/Containers";
import { ScrollView } from "react-native-gesture-handler";

export default function ArticleMenu({ navigation }) {
  return (
    <>
      <ScrollView>
        <Tray composition="compact">
          {/* Pasek nawigujący do sekcji "Home" */}
          <PasekNawigacyjnyArticleMenu navigation={navigation} />
        </Tray>
        <ImageBackground
          source={require("../../assets/tlo_dodawanie.png")}
          style={{ flex: 1, justifyContent: "center" }}
        >
          <Container>
            {/* Przyciski w menu "Towar (Article)" nawigujące do nowych sekcji */}
            <Tray spread="center" composition="compact">
              <ManagmentButton navigation={navigation} />
              <AddArticleButton navigation={navigation} />
            </Tray>
            <Tray spread="center" composition="compact">
              <RemoveStockedArticleButton navigation={navigation} />
              <AddStockedArticleButton navigation={navigation} />
            </Tray>
          </Container>
        </ImageBackground>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
