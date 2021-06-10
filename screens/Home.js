import React from "react";
import { ImageBackground } from "react-native";
import { LogoutButton } from "../components/Buttons";
import { Tray } from "../components/Trays";
import {
  LocationButton,
  UsersButton,
  SettingsButton,
  PackageButton,
} from "../components/RoundButtons";
import { Container } from "../components/Containers";
import { ScrollView } from "react-native-gesture-handler";

const kliknij = (text) => {
  console.log(text);
};

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/tlo_dodawanie.png")}
        style={{ flex: 1 }}
      >
        <Container composition="compact" spread="top">
          <Tray spread="right" composition="loose">
            <LogoutButton />
          </Tray>

          <Container composition="compact" spread="center">
            <Tray spread="center" composition="compact">
              <PackageButton navigation={navigation} />
              <LocationButton navigation={navigation} />
            </Tray>

            <Tray spread="center" composition="compact">
              <UsersButton navigation={navigation} />
              <SettingsButton navigation={navigation} />
            </Tray>
          </Container>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
