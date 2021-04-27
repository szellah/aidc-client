import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import ChooseSectionButton from "../components/ChooseSectionButton";
import SectionsMenu from "../components/SectionsMenu";

export default function Home({ navigation }) {
  const Logout = () => {
    // tymczasowo, aby łatwiej się poruszać
    navigation.navigate("Login");
  };

  // poszczególne sekcje do menu
  const Sections = () => {
    return (
      <>
        <ChooseSectionButton
          srcImg={require("../assets/homePage/TOWARButton.png")}
          PressHandler={() => {
            navigation.navigate("Dodawanie");
          }}
        />
        <ChooseSectionButton
          srcImg={require("../assets/homePage/LOKALIZACJAButton.png")}
          PressHandler={() => {
            navigation.navigate("Login");
          }}
        />
        <ChooseSectionButton
          srcImg={require("../assets/homePage/UŻYTKOWNICYButton.png")}
          PressHandler={() => {
            navigation.navigate("Raport");
          }}
        />
        <ChooseSectionButton
          srcImg={require("../assets/homePage/USTAWIENIAButton.png")}
          PressHandler={() => {
            navigation.navigate("Login");
          }}
        />
      </>
    );
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        // nie znalazłem tła w plikach, więc dałem "tło dodawanie"
        source={require("../assets/homePage/tempBackground.png")}
        style={styles.imageBackground}
      >
        <View style={{ alignSelf: "flex-end" }}>
          <TouchableOpacity onPress={Logout} style={styles.logout}>
            <Image
              style={styles.imgButton}
              source={require("../assets/homePage/WYLOGUJButton.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: "auto",
            marginBottom: "auto",
            paddingBottom: styles.logout.marginTop,
            maxWidth: 340,
            maxHeight: 440,
          }}
        >
          <SectionsMenu>
            <Sections />
          </SectionsMenu>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  logout: {
    marginTop: 40,
    marginRight: 40,
    maxWidth: 150,
  },
  imgButton: {
    resizeMode: "contain",
    maxWidth: "100%",
  },
});
