import React, { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Tray } from "../../components/Trays";
import { ScrollView } from "react-native-gesture-handler";

import { LocationCodeInput } from "../../components/Inputs";
import { ConfirmButton } from "../../components/Buttons";

import { PasekNawigacyjny } from "../../components/PasekNawigacyjny.js";
import { Container } from "../../components/Containers";

/**
 * Ekran Skanownaia Lokalizacji<br>
 * Służy do skanowania kodów poszczególnych Lokalizacji<br>
 * posiada takie przyciski jak:<br>
 * - potwierdź<br> 
 * 
 * 
 * @function ScanLocation
 * @param {object} navigation pozwala na przenoszenie się między ekranami
 * @category Screens
 * @returns {JSX} Zwraca Ekran Skanownaia Lokalizacji w postaci elementu JSX
 */
export default function ScanLocation({ navigation, route }) {
  const [locationCode, setLocationCode] = useState("10");

  useEffect(() => {
    if (navigation.getParam("qrcode"))
      setLocationCode(navigation.getParam("qrcode"));
  }, [navigation.getParam("qrcode")]);

  const Confirm = () => {
    if(navigation.getParam("previousScreen") === "ArticleMenu"){
      navigation.navigate("ScanArticle", {data: locationCode, handler: navigation.getParam("handler"), previousScreen: navigation.getParam("previousScreen")})
    }
  };
  return (
    // ScrollView to kontener, który pozwala przewijać ekran, gdy elementy nie mieszczą się na ekranie
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      {/* KeyboardAvoidingView to kontener, który chroni przed "zjadaniem" elementów po wysunięciu klawiatury */}
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flexGrow: 1,
        }}
      >
        <Tray composition="compact">
          {/* Pasek nawigujący do poprzednich sekcji */}
          <PasekNawigacyjny navigation={navigation} />
        </Tray>
        <ImageBackground
          source={require("../../assets/locationPage/background.png")}
          style={{ flex: 1, justifyContent: "center" }}
        >
          <Container spread="center" composition="loose">
            <Container spread="center" composition="compact">
              <Tray spread="center" composition="compact">
                <View style={{ maxHeight: 160, marginBottom: 10 }}>
                  <Image
                    source={require("../../assets/locationPage/qr.png")}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      resizeMode: "contain",
                    }}
                  />
                </View>
              </Tray>
              <View>
                <LocationCodeInput
                  pressHandler={() => {
                    navigation.navigate("Scan", {
                      previousScreen: "ScanLocation",
                    });
                  }}
                  text={locationCode}
                />
              </View>
            </Container>

            <Container spread="bottom" composition="compact">
              <Tray spread="center" composition="compact">
                <ConfirmButton pressHandler={Confirm} />
              </Tray>
            </Container>
          </Container>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
