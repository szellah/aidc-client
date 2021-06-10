import React, { useState, useEffect } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Tray } from "../../components/Trays";
import { ScrollView } from "react-native-gesture-handler";

import { ArticleCodeInput } from "../../components/Inputs";
import { ConfirmButton } from "../../components/Buttons";

import { PasekNawigacyjny } from "../../components/PasekNawigacyjny.js";
import { Container } from "../../components/Containers";

/**
 * Ekran skanowania artykułu<br>
 * Służy do skanowania kodów poszczególnych Towarów<br>
 * posiada takie przyciski jak:<br>
 * - potwierdź<br> 
 * 
 * 
 * @function ScanArticle
 * @param {object} navigation pozwala na przenoszenie się między ekranami
 * @category Screens
 * @returns {JSX} Zwraca Ekran skanowania artykułu w postaci elementu JSX
 */
export default function ScanArticle({ navigation , route}) {
  const [articleCode, setArticleCode] = useState("kod");

  useEffect(() => {
    if (navigation.getParam("qrcode"))
      setArticleCode(navigation.getParam("qrcode"));
  }, [navigation.getParam("qrcode")]);

  const Confirm = () => {};
  return (
    // ScrollView to kontener, który pozwala przewijać ekran, gdy elementy nie mieszczą się na ekranie
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* KeyboardAvoidingView to kontener, który chroni przed "zjadaniem" elementów po wysunięciu klawiatury */}
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flexGrow: 1,
        }}
      >
        <Tray composition="compact">
          {/* Pasek nawigujący do sekcji */}
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
                <ArticleCodeInput
                  pressHandler={() => {
                    navigation.navigate("Scan", {
                      previousScreen: "ScanArticle",
                    });
                  }}
                  text={articleCode}
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
