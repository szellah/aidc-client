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
import {
  NameInput,
  CategorySelect,
  LocationCodeInput,
  ArticleCodeInput,
  DescriptionInput,
} from "../../components/Inputs.js";
import { SaveButton, CancelButton } from "../../components/Buttons.js";
import { PasekNawigacyjny } from "../../components/PasekNawigacyjny.js";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "../../components/Containers.js";
import { Tray } from "../../components/Trays.js";

export default function ArticleEdit({ navigation }) {
  const [Name, SetName] = useState("");
  const [Category, SetCategory] = useState("");
  const [LocationCode, SetLocationCode] = useState("");
  const [ArticleCode, SetArticleCode] = useState("");
  const [Description, SetDescription] = useState("");

  const Save = () => {};
  const Cancel = () => {
    navigation.navigate("ArticleMenu");
  };

  return (
    // ScrollView to kontener, który pozwala przewijać ekran, gdy elementy nie mieszczą się na ekranie

    <ScrollView>
      <Tray composition="compact" spread="center">
        <PasekNawigacyjny />
      </Tray>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={styles.bckg}
      >
        <Container>
          <NameInput />

          <CategorySelect />

          <LocationCodeInput pressHandler={() => {}} />

          <ArticleCodeInput pressHandler={() => {}} />

          <DescriptionInput />

          <Container composition="compact" spread="bottom">
            <Tray composition="loose" spread="even">
              <SaveButton pressHandler={Save} />

              <CancelButton pressHandler={Cancel} />
            </Tray>
          </Container>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 40,
  },

  name: {
    marginBottom: "5%",
    height: 47,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
  },

  description: {
    height: "30%",
    alignItems: "flex-start",
  },

  bckg: {
    width: "100%",
    height: "100%",
  },
});
