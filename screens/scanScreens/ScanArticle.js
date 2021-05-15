import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";
import { Tray } from "../../components/Trays";
import { ScrollView } from "react-native-gesture-handler";

import { ArticleCodeInput } from "../../components/Inputs";
import { ConfirmButton } from "../../components/Buttons";

import { PasekNawigacyjny } from "../../components/PasekNawigacyjny.js";

export default function ScanArticle({ navigation }) {
  const [ArticleCode, SetArticleCode] = useState("");

  const Confirm = () => {};
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
          {/* Pasek nawigujący do sekcji */}
          <PasekNawigacyjny navigation={navigation} />
        </Tray>

        <ImageBackground
          source={require("../../assets/locationPage/background.png")}
          style={{
            minHeight: "100%",
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <View style={{ alignItems: "center" }}>
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
            <View>
              <ArticleCodeInput pressHandler={() => {}} />
            </View>
          </View>

          <Tray spread="center" composition="compact">
            <ConfirmButton pressHandler={Confirm} />
          </Tray>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
