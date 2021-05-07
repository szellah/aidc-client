import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";

/* Pasek nawigacyjny */

/* Dodanie go do ekranu w App.js: 
        <Stack.Screen 
        options={{headerTitle: () => <PasekNawigacyjny/>}}>
        </Stack.Screen>

*/

export const PasekNawigacyjny = ({ navigation } /* Obiekt do nawigacji */) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
      /* Nawigacja onPress={() => navigation.navigate("ekran")} */
      >
        <Image source={require("../assets/homeIcon.png")} style={styles.home} />
      </TouchableOpacity>
      <TouchableOpacity
      /* Nawigacja onPress={() => navigation.navigate("ekran")} */
      >
        <Image source={require("../assets/itemIcon.png")} style={styles.item} />
      </TouchableOpacity>
      <Image
        source={require("../assets/pusty2Icon.png")}
        style={styles.pusty}
      />
    </View>
  );
};

// Pasek nawigacyjny w menu "Towar (ArticleMenu)"
export const PasekNawigacyjnyArticleMenu = (
  { navigation } /* Obiekt do nawigacji */
) => {
  return (
    <ImageBackground
      source={require("../assets/navigationBase.png")}
      style={[styles.header, { height: height * 0.065 }]}
    >
      <TouchableOpacity
        style={{
          maxHeight: "100%",
          flex: 1,
          flexDirection: "row",
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={require("../assets/homeIcon.png")}
          style={{ maxHeight: "100%", width: 50 }}
        />
        <Image
          source={require("../assets/pustyNav.png")}
          style={{ maxHeight: "100%", maxWidth: 200, resizeMode: "stretch" }}
        />
      </TouchableOpacity>
      <Text style={{ fontSize: 22, marginHorizontal: 15, color: "white" }}>
        Towar
      </Text>
    </ImageBackground>
  );
};

export const PasekNawigacyjnyInfo = (
  { navigation } /* Obiekt do nawigacji */
) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
      /* Nawigacja onPress={() => navigation.navigate("ekran")} */
      >
        <Image source={require("../assets/homeIcon.png")} style={styles.home} />
      </TouchableOpacity>
      <TouchableOpacity
      /* Nawigacja onPress={() => navigation.navigate("ekran")} */
      >
        <Image source={require("../assets/itemIcon.png")} style={styles.item} />
      </TouchableOpacity>
      <TouchableOpacity
      /* Nawigacja onPress={() => navigation.navigate("ekran")} */
      >
        <Image source={require("../assets/infoIcon.png")} style={styles.info} />
      </TouchableOpacity>
      <Image source={require("../assets/pustyIcon.png")} style={styles.pusty} />
    </View>
  );
};

/* Pobiera wymiary okna */

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  home: {
    width: width * 0.15,
    height: height * 0.065,
  },
  item: {
    width: width * 0.15,
    height: height * 0.065,
  },
  info: {
    width: width * 0.15,
    height: height * 0.065,
  },
  pusty: {
    width: width * 0.7,
    height: height * 0.065,
  },
});
