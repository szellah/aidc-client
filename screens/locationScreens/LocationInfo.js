import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
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
import { ScrollView } from "react-native-gesture-handler";

export default function LocationInfo() {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1 }}
      >
        <Container>
          <View style={styles.paseknagorze}>
            <PanelLokalizacjiEdytujUsun />
          </View>

          <Container composition="loose" spread="top">
            <BuildingSelect />
            <FloorsSelect />
            <RoomSelect />
            <ArticleCodeInput />
          </Container>

          <Container composition="loose" spread="bottom">
            <Tray composition="loose" spread="even">
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
  paseknagorze: {
    width: "100%",
    flexDirection: "row",
  },
});
