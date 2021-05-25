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

/**
 * Pasek Nawigacyjny<br>
 * Wyświetla się na każdym kolejnym ekranie po wybraniu jednej
 * z czterech ikon na ekranie po zalogowaniu<br>
 * pozwala na swobodny dostęp do ekranu głównego,
 * wracanie na poprzedni ekran aplikacji
 * 
 * 
 * @param {object} navigation 
 * Umożliwia przenoszenie się między ekranami
 * @category Components
 * @returns {JSX}
 *  Zwraca pasek nawigacyjny znajdjący na górze ekranu w postaci 
 * elementu JSX
 */



// Pasek nawigacyjny 

// Dodanie go do ekranu w App.js: 
      //  <Stack.Screen 
       // options={{headerTitle: () => <PasekNawigacyjny/>}}>
      //  </Stack.Screen>


export const PasekNawigacyjny = ({ navigation } /* Obiekt do nawigacji*/ ) => {
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
/**
 * Pasek Nawigacyjny w Menu Towar<br>
 * Wyświetla się na każdym kolejnym ekranie po wybraniu ikonki Towar
 *  na ekranie po zalogowaniu<br>
 * pozwala na swobodny dostęp do ekranu głównego,
 * wracanie na poprzedni ekran aplikacji<br>
 * składa się  z ikonki domku ( powrót do ekranu głównego) i ikonki towaru
 * 
 * 
 * @param {object} navigation 
 * Umożliwia przenoszenie się między ekranami
 * @category Components
 * @returns {JSX}
 *  Zwraca pasek nawigacyjny znajdjący na górze ekranu w postaci 
 * elementu JSX
 */
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

}
/**
 * Pasek Nawigacyjny w Menu Lokalizacji <br>
 * Wyświetla się na każdym kolejnym ekranie po wybraniu ikonki Lokalizacja
 *  na ekranie po zalogowaniu<br>
 * pozwala na swobodny dostęp do ekranu głównego,
 * wracanie na poprzedni ekran aplikacji<br>
 *  składa się  z ikonki domku ( powrót do ekranu głównego) i ikonki lokalizacji
 * 
 * @param {object} navigation 
 * Umożliwia przenoszenie się między ekranami
 * @category Components
 * @returns {JSX}
 *  Zwraca pasek nawigacyjny znajdjący na górze ekranu w postaci 
 * elementu JSX
 */
export const PasekNawigacyjnyMenuLokalizacji = ({navigation} /* Obiekt do nawigacji */) => {
    return (
      <View style={styles.header}>
          <TouchableOpacity
              /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
              <Image source={require("../assets/domektest3.png")} style={styles.homelocalization}/>
          </TouchableOpacity>
          <TouchableOpacity
              /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
              <Image source={require("../assets/lokalizacjapasek.png")} style={styles.localization}/>
          </TouchableOpacity>
          <Image source={require("../assets/Lokalizacja3.png")} style={styles.pusty}/>
          
      </View>
    );
  }
    /**
 * Pasek Nawigacyjny w Menu Lokalizacji Edytuj i Usuń <br>
 * Wyświetla się na ekranie po wybraniu ikonki Lokalizacja i edycji bądź usunięcia lokalizacji do/ z  raportu
 *  na ekranie po zalogowaniu<br>
 * pozwala na swobodny dostęp do ekranu głównego,
 * wracanie na poprzedni ekran aplikacji<br>
 *  składa się  z ikonki domku ( powrót do ekranu głównego) i ikonki lokalizacji, ikonki informacyjnej
 * 
 * @param {object} navigation 
 * Umożliwia przenoszenie się między ekranami
 * @category Components 
 * @returns {JSX}
 *  Zwraca pasek nawigacyjny znajdjący na górze ekranu w postaci 
 * elementu JSX
 */
  export const PanelLokalizacjiEdytujUsun = ({navigation} /* Obiekt do nawigacji */) => {
    return (
      <View style={styles.header}>
          <TouchableOpacity
              /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
              <Image source={require("../assets/DomekEkran2.png")} style={styles.homelocalization}/>
          </TouchableOpacity>
          <TouchableOpacity
              /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
              <Image source={require("../assets/LokalizacjaEkran2.png")} style={styles.localization}/>
          </TouchableOpacity>
          <TouchableOpacity
              /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
              <Image source={require("../assets/infoIcon.png")} style={styles.localization}/>
          </TouchableOpacity>
          <Image source={require("../assets/Informacje.png")} style={styles.infoekran2}/>
          
      </View>
    );
  }
  /**
 * Pasek Nawigacyjny w Menu Lokalizacji Zapisz i Anuluj <br>
 * Wyświetla się na ekranie po wybraniu ikonki Lokalizacja i dodania lokalizacji do raportu
 *  na ekranie po zalogowaniu<br>
 * pozwala na swobodny dostęp do ekranu głównego,
 * wracanie na poprzedni ekran aplikacji<br>
 *  składa się  z ikonki domku ( powrót do ekranu głównego) i ikonki lokalizacji,napisu dodaj i plusika
 * 
 * @param {object} navigation 
 * Umożliwia przenoszenie się między ekranami
 * @category Components
 * @returns {JSX}
 *  Zwraca pasek nawigacyjny znajdjący na górze ekranu w postaci 
 * elementu JSX
 */
  export const PanelLokalizacjiZapiszAnuluj = ({navigation} /* Obiekt do nawigacji */) => {
    return (
      <View style={styles.header}>
          <TouchableOpacity
              /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
              <Image source={require("../assets/DomekEkran2.png")} style={styles.homelocalization}/>
          </TouchableOpacity>
          <TouchableOpacity
              /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
              <Image source={require("../assets/LokalizacjaEkran2.png")} style={styles.localization}/>
          </TouchableOpacity>
          <TouchableOpacity
              /* Nawigacja onPress={() => navigation.navigate("ekran")} */>
              <Image source={require("../assets/PlusikEkran3.png")} style={styles.localization}/>
          </TouchableOpacity>
          <Image source={require("../assets/DodajEkran3.png")} style={styles.infoekran2}/>
          
      </View>
    );
  

};

  /**
 * Pasek Nawigacyjny Informacyjny <br>
 * Wyświetla się na ekranie po wybraniu ikonki Informacje
 *  na ekranie po zalogowaniu<br>
 * pozwala na swobodny dostęp do ekranu głównego,
 * wracanie na poprzedni ekran aplikacji<br>
 *  składa się  z ikonki domku ( powrót do ekranu głównego) i ikonki informacyjnej 
 *np
 * @param {object} navigation 
 * Umożliwia przenoszenie się między ekranami
 * @category Components
 * @returns {JSX}
 *  Zwraca pasek nawigacyjny znajdjący na górze ekranu w postaci 
 * elementu JSX
 */
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
    // height: "100%",
    height: height * 0.065,
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
  localization: {
    width: width * 0.15,
    height: height * 0.065,
  },
  homelocalization:{
    width: width * 0.15,
    height: height * 0.065,
  },
  infoekran2:{
    width: width * 0.55,
    height: height * 0.065,
  },

});