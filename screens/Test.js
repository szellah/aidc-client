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

const kliknij = (text) => {
  console.log(text);
};

export default function Test({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/tlo_dodawanie.png")}
      style={{ flex: 1 }}
    >
      <Tray spread="right" composition="loose">
        <LogoutButton />
      </Tray>
      <Tray spread="center" composition="compact">
        <PackageButton navigation={navigation} />
        <LocationButton navigation={navigation} />
      </Tray>
      <Tray spread="center" composition="compact">
        <UsersButton navigation={navigation} />
        <SettingsButton navigation={navigation} />
      </Tray>
    </ImageBackground>
  );
}
