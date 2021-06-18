import React from "react";
import { Feather, Foundation, Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image} from "react-native";


/**
 * Okrągły przycisk, zwykle używany w menu do nawigacji między ekranami aplikacji. <br>
 * Najlepiej ułożyc je w obiektach typu Tray, nie więcej niż po dwa w jednym.
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * @param {string} destination -Nazwa ekranu do którego ma prowadzić nas po wciśnięciu przycisku. Należy się upewnieć czy ekran znajduje się w tym samym kontenerze nawigacji co ekran.
 * @param {string} icon - Nazwa ikony z pakietu ikon expo, o wybranej rodzinie. https://icons.expo.fyi
 * @param {string} [familyOfIcons] - Nazwa czcionki fontowej do wyboru: Ionics, Foundation (jeżeli nie wpiszemy żadnej wyświetli się Feather)
 * @param {string} title -Napis który wyświetliu się pod przyciskiem.
 * @param {string} color -Kolor przycisku: blue, yellow, sand, gray.
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Root Components
 */
export const RoundButton = ({navigation, destination, handler, icon, familyOfIcons, title, color, previousScreen}) => {
    
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate(destination, {handler: handler, previousScreen: previousScreen});
          }}
        >

            <View style={styles.buttonBox}>
                <View style={[ styles.button, colors[color] ]}>
                    <Icon 
                    familyOfIcons = {familyOfIcons}
                    icon = {icon}
                    />
                </View>
                <Text
                style={[ styles.buttonText, textColors[color] ]}
                >
                    {title}
                </Text>
            </View>
          </TouchableOpacity>
    );
}




// 
/**
 * CustomRoundButton to przycisk który potrzebuje specjalnej grafiki (takiej której nie ma w "@expo/vector-icons"). <br>
 * Najlepiej ułożyc je w obiektach typu Tray, nie więcej niż po dwa w jednym.
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * @param {string} destination -Nazwa ekranu do którego ma prowadzić nas po wciśnięciu przycisku. Należy się upewnieć czy ekran znajduje się w tym samym kontenerze nawigacji co ekran.
 * @param {string} src - Ścieżka do ikony .png
 * @param {string} title -Napis który wyświetliu się pod przyciskiem.
 * @param {string} color -Kolor przycisku: blue, yellow, sand, gray.
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Root Components
 */
export const CustomRoundButton = ({
  navigation,
  destination,
  src,
  title,
  color,
  handler,
  previousScreen
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(destination, {handler: handler, previousScreen: previousScreen});
      }}
    >
      <View style={styles.buttonBox}>
        <View style={[styles.button, colors[color]]}>
          <Image
            source={src}
            style={{
              maxWidth: Dimensions.get("window").width * 0.18,
              resizeMode: "contain",
            }}
          ></Image>
        </View>
        <Text style={[styles.buttonText, textColors[color]]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

//poszczególne przyciski menuodt
/**
 * Przycisk nawigujący do menu Towaru
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const PackageButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="yellow"
      icon="package"
      destination="ArticleMenu"
      title="Towar"
    />
  );
};

/**
 * Przycisk nawigujący do menu 
 * @function
 * @param {string} familyOfIcons -Nazwa czcionki ikonowej
 * @param {string} icon -Nazwa ikony w czcionce
 * 
 * @returns {JSX} zwraca ikonę jako element JSX
 * 
 * @category Round Buttons
 */
export const Icon = ({familyOfIcons, icon}) => {
    if(familyOfIcons == null)
        return(<Feather name={icon} size={Dimensions.get('window').width * 0.18} color="white" />)
    else
    if(familyOfIcons == "Foundation")
        return(<Foundation name={icon} size={Dimensions.get('window').width * 0.25} color="white" />)
    else
    if(familyOfIcons == "Ionicons")
            return(<Ionicons name={icon} size={Dimensions.get('window').width * 0.25} color="white" />)
}

/**
 * Przycisk nawigujący do menu Lokalizacji
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const LocationButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="gray"
      icon="map-pin"
      destination="LocationMenu"
      title="Lokalizacja"
    />
  );
};

/**
 * Przycisk nawigujący do menu Użytkowników
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const UsersButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      icon="users"
      destination="UsersMenu"
      title="Użytkownicy"
    />
  );
};

/**
 * Przycisk nawigujący do menu Ustawień
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const SettingsButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="sand"
      icon="settings"
      destination="Settings"
      title="Ustawienia"
    />
  );
};

// Przyciski w sekcji "Towar (ArticleMenu)"
/**
 * Przycisk nawigujący do menu Towar/Zarządzanie 
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const ManagmentButton = ({ navigation }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="blue"
      src={require("../assets/articleMenuPage/textFile.png")}
      destination="Managment"
      title="Zarządzanie"
    />
  );
};

/**
 * Przycisk nawigujący do ekranu Towar/Dodaj Nowy
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const AddArticleButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      previousScreen="ArticleMenu"
      color="gray"
      icon="plus"
      destination="ArticleEdit"
      title="Dodaj"
    />
  );
};


//poszczególne przyciski ustawień

/**
 * Przycisk nawigujący do ekran Ustawienia/Zmień hasło
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const ChangePasswordButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="yellow"
        familyOfIcons="Foundation"
        icon="lock"
        destination="AccountChangePassword"
        title="Zmień hasło"
        />
    )
}

/**
 * Przycisk nawigujący do ekranu Ustawienia/Informacje
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const AccountInfoButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="gray"
        familyOfIcons="Ionicons"
        icon="information-circle-outline"
        destination="AccountInfo"
        title="Informacje"
        />
    )
}

/**
 * Przycisk nawigujący do ekranu Ustwaienia/Usuń konto
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const DeleteAccountButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="blue"
        familyOfIcons="Foundation"
        icon="x-circle"
        destination="DeleteAccount"
        title="Usuń konto"
        />
    )
}

// przycisk "Odtowaruj"
/**
 * Przycisk nawigujący do ekranu Towar/Odtowaruj
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const RemoveStockedArticleButton = ({ navigation, handler }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      handler={handler}
      previousScreen="ScanArticle"
      color="yellow"
      src={require("../assets/articleMenuPage/emptyBox.png")}
      destination="ScanArticle"
      title="Odtowaruj"
    />
  );
};
// przycisk "Dotowaruj"
/**
 * Przycisk nawigujący do ekranu Towar/Dotowaruj
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const AddStockedArticleButton = ({ navigation, handler }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="sand"
      previousScreen="ArticleMenu"
      handler={handler}
      src={require("../assets/articleMenuPage/filledBox.png")}
      destination="ScanLocation"
      title="Dotowaruj"
    />
  );
};

/**
 * Przycisk nawigujący do ekranu Lokalizacja/Informacje
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const LocationInfoButton = ({navigation, handler}) => {
    return(
        <RoundButton
        navigation={navigation}
        handler={handler}
        color="gray"
        icon="info"
        destination="ScanLocation"
        previousScreen="ScanLocation"
        title="Informacje"
        />
    )
}

/**
 * Przycisk nawigujący do ekranu Lokalizacja/Dodaj nową
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const LocationAddNewButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="sand"
        icon="plus"
        destination="LocationEdit"
        previousScreen="LocationMenu"
        title="Dodaj"
        />
    )
}

// Przyciski w Zarządzaniu (Managment)

/**
 * Przycisk nawigujący do ekranu Towar/Informacje
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const ArticleInfoButton = ({ navigation, handler }) => {
  return (
    <RoundButton
      navigation={navigation}
      handler={handler}
      previousScreen="ScanArticle"
      color="blue"
      icon="info"
      destination="ScanArticle"
      title="Informacje"
    />
  );
};

/**
 * Przycisk nawigujący do ekranu Towar/Raporty
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const ReportsButton = ({ navigation }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="yellow"
      src={require("../assets/managmentPage/notepad.png")}
      destination="CreateReport"
      title="Raporty"
    />
  );
};

/**
 * Przycisk nawigujący do ekranu Użytkownicy/Informacje
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const UsersInfoButton = ({navigation}) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      icon="info"
      destination="UsersTable"
      title="Informacje"
    />
  );
};

/**
 * Przycisk nawigujący do ekranu Użytkownicy/Dodaj nowego
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * 
 * @returns {JSX} zwraca przycisk nawigacyjny jako element JSX
 * 
 * @category Round Buttons
 */
export const UserAddNewButton = ({navigation}) => {
  return (
    <RoundButton
      navigation={navigation}
      color="yellow"
      icon="plus"
      destination="UserPanelSave"
      title="Dodaj Nowego"
    />
  );
};

//style
const styles = StyleSheet.create({
  buttonBox: {
    marginHorizontal: Dimensions.get("window").width * 0.03,
    marginVertical: Dimensions.get("window").width * 0.03,
  },
  button: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").width * 0.4,
    borderRadius: Math.ceil(Dimensions.get("window").width * 0.4),
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginTop: 5,
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "600",
    alignSelf: "center",
  },
  buttonBlue: {
    backgroundColor: "#cee6f8",
  },
  buttonYellow: {
    backgroundColor: "#ffc06f",
  },
  buttonGray: {
    backgroundColor: "#adc4d5",
  },
  buttonSand: {
    backgroundColor: "#ffdbab",
  },
  textBlue: {
    color: "#cee6f8",
  },
  textYellow: {
    color: "#ffc06f",
  },
  textGray: {
    color: "#adc4d5",
  },
  textSand: {
    color: "#ffdbab",
  },
});

const colors = {
  yellow: styles.buttonYellow,
  gray: styles.buttonGray,
  blue: styles.buttonBlue,
  sand: styles.buttonSand,
};
const textColors = {
  yellow: styles.textYellow,
  gray: styles.textGray,
  blue: styles.textBlue,
  sand: styles.textSand,
};
