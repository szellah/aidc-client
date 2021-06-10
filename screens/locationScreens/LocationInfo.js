import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { EditButton, DeleteButton } from "../../components/Buttons.js";
import { PanelLokalizacjiEdytujUsun } from "../../components/PasekNawigacyjny.js";
import {
  FloorsSelect,
  BuildingSelect,
  ArticleCodeInput,
  RoomSelect,
} from "../../components/Inputs.js";
import { Tray } from "../../components/Trays";
import { Container } from "../../components/Containers.js";

export default function LocationInfo() {
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={{
        flexGrow: 1,
      }}
    >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Tray composition="compact" spread="center">
          <PanelLokalizacjiEdytujUsun />
        </Tray>
        <ImageBackground
          source={require("../../assets/tlo_dodawanie.png")}
          style={{ flex: 1 }}
        >
          <Container spread="top" composition="comapct">
            <BuildingSelect />
            <FloorsSelect />
            <RoomSelect />
            <ArticleCodeInput />

            <Container composition="loose" spread="bottom">
              <Tray composition="loose" spread="even">
                <EditButton />
                <DeleteButton />
              </Tray>
            </Container>
          </Container>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  paseknagorze: {
    width: "100%",
    flexDirection: "row",
  },
});
