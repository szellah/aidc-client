import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
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

    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Tray composition="compact" spread="center">
        <PasekNawigacyjny />
      </Tray>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Container spread="top" composition="comapct">
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
