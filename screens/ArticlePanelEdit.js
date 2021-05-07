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
} from "../components/Inputs.js";
import { EditButton, DeleteButton } from "../components/Buttons.js";
import { PasekNawigacyjny } from "../components/PasekNawigacyjny.js";
import { ScrollView } from "react-native-gesture-handler";

export default function ArticlePanelEdit({ navigation }) {
  const [Name, SetName] = useState("");
  const [Category, SetCategory] = useState("");
  const [LocationCode, SetLocationCode] = useState("");
  const [ArticleCode, SetArticleCode] = useState("");
  const [Description, SetDescription] = useState("");

  const Edit = () => {};
  const Delete = () => {};

  return (
    // ScrollView to kontener, który pozwala przewijać ekran, gdy elementy nie mieszczą się na ekranie
    <ScrollView>
      <ImageBackground
        source={require("../assets/tlo_dodawanie.png")}
        style={styles.bckg}
      >
        <View style={styles.bckg}>
          <View style={styles.nav}>
            <PasekNawigacyjny />
          </View>
          <View style={styles.name}>
            <NameInput />
          </View>

          <View style={styles.name}>
            <CategorySelect />
          </View>

          <View style={styles.name}>
            <LocationCodeInput pressHandler={() => {}} />
          </View>

          <View style={styles.name}>
            <ArticleCodeInput pressHandler={() => {}} />
          </View>

          <View style={styles.description}>
            <DescriptionInput />
          </View>

          <View style={styles.buttons}>
            <View>
              <EditButton pressHandler={Edit} />
            </View>
            <View>
              <DeleteButton pressHandler={Delete} />
            </View>
          </View>
        </View>
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
