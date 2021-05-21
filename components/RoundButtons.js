import React from "react";
<<<<<<< HEAD
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions} from "react-native";


//Okrągły przycisk, zwykle używany w menu do nawigacji między ekranami aplikacji.
//Najlepiej ułożyc je w obiektach typu Tray, nie więcej niż po dwa w jednym
//
//navigation object - Przekazywany obiekt nawigacyjny.
//destination string - Nazwa ekranu do którego ma prowadzić nas po wciśnięciu przycisku. Należy się upewnieć czy ekran znajduje się w tym samym kontenerze nawigacji co ekran.
//icon string - Nazwa ikony z pakietu Feather. https://icons.expo.fyi
//title string - Napis który wyświetliu się pod przyciskiem.
//color string - Kolor przycisku: blue, yellow, sand, gray.

/**
 * Okrągły przycisk
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * @param {string} destination -Nazwa ekranu do którego ma prowadzić nas po wciśnięciu przycisku. Należy się upewnieć czy ekran znajduje się w tym samym kontenerze nawigacji co ekran.
 * @param {string} icon - Nazwa ikony z pakietu Feather. https://icons.expo.fyi
 * @param {string} title -Napis który wyświetliu się pod przyciskiem.
 * @param {string} color -Kolor przycisku: blue, yellow, sand, gray.
 
 */
export const RoundButton = ({navigation, destination, icon, title, color}) => {
=======
import { Feather, Foundation, Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Image} from "react-native";


//Element po którym pseudo dziedziczy, dla reacta się na to mówi "zawieranie"
export const RoundButton = ({navigation, destination, icon, familyOfIcons, title, color}) => {
    
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate(destination);
          }}
        >

            <View style={styles.buttonBox}>
                <View style={[ styles.button, colors[color] ]}>
<<<<<<< HEAD
                    <Feather name={icon} size={Dimensions.get('window').width * 0.18} color="white" />
=======
                    <Icon 
                    familyOfIcons = {familyOfIcons}
                    icon = {icon}
                    />
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
                </View>
                <Text
                style={[ styles.buttonText, textColors[color] ]}
                >
                    {title}
                </Text>
            </View>
<<<<<<< HEAD

        </TouchableOpacity>
    )
}

/**
 * Poszczególne przyciski menu
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * @property {string} colour -kolor przycisku
 * @property {string} icon   -Nazwa ikony z pakietu Feather. https://icons.expo.fyi
 * @property {string} destination -Nazwa ekranu do którego ma prowadzić nas po wciśnięciu przycisku. Należy się upewnieć czy ekran znajduje się w tym samym kontenerze nawigacji co ekran.
 * @property {string} title -Napis który wyświetliu się pod przyciskiem.
 
 */

//poszczególne przyciski menu
export const PackageButton = ({navigation}) => {
=======
          </TouchableOpacity>
    );
}




// CustomRoundButton to przycisk który potrzebuje specjalnej grafiki (takiej której nie ma w "@expo/vector-icons")
export const CustomRoundButton = ({
  navigation,
  destination,
  src,
  title,
  color,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(destination);
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

//poszczególne przyciski menu
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

export const AddArticleButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="gray"
      icon="plus"
      destination="ArticlePanelSave"
      title="Dodaj"
    />
  );
};


//poszczególne przyciski ustawień
export const ChangePasswordButton = ({navigation}) => {
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
    return(
        <RoundButton
        navigation={navigation}
        color="yellow"
<<<<<<< HEAD
        icon="package"
        destination="Home"
        title="Towar"
        />
    )
}
/**
 * Poszczególne przyciski menu
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * @property {string} colour -kolor przycisku
 * @property {string} icon   -Nazwa ikony z pakietu Feather. https://icons.expo.fyi
 * @property {string} destination -Nazwa ekranu do którego ma prowadzić nas po wciśnięciu przycisku. Należy się upewnieć czy ekran znajduje się w tym samym kontenerze nawigacji co ekran.
 * @property {string} title -Napis który wyświetliu się pod przyciskiem.

 */

export const LocationButton = ({navigation}) => {
=======
        familyOfIcons="Foundation"
        icon="lock"
        destination="AccountChangePassword"
        title="Zmień hasło"
        />
    )
}

export const AccountInfoButton = ({navigation}) => {
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
    return(
        <RoundButton
        navigation={navigation}
        color="gray"
<<<<<<< HEAD
        icon="map-pin"
        destination="Raport"
        title="Lokalizacja"
=======
        familyOfIcons="Ionicons"
        icon="Information-circle-outline"
        destination="AccountInfo"
        title="Informacje"
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
        />
    )
}

<<<<<<< HEAD
/**
 * Poszczególne przyciski menu
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * @property {string} colour -kolor przycisku
 * @property {string} icon   -Nazwa ikony z pakietu Feather. https://icons.expo.fyi
 * @property {string} destination -Nazwa ekranu do którego ma prowadzić nas po wciśnięciu przycisku. Należy się upewnieć czy ekran znajduje się w tym samym kontenerze nawigacji co ekran.
 * @property {string} title -Napis który wyświetliu się pod przyciskiem.
 
 */

export const UsersButton = ({navigation}) => {
=======
export const DeleteAccountButton = ({navigation}) => {
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
    return(
        <RoundButton
        navigation={navigation}
        color="blue"
<<<<<<< HEAD
        icon="users"
        destination="Raport"
        title="Użytkownicy"
        />
    )
}
/**
 * Poszczególne przyciski menu
 * @function
 * @param {object} navigation -Przekazywany obiekt nawigacyjny
 * @property {string} colour -kolor przycisku
 * @property {string} icon   -Nazwa ikony z pakietu Feather. https://icons.expo.fyi
 * @property {string} destination -Nazwa ekranu do którego ma prowadzić nas po wciśnięciu przycisku. Należy się upewnieć czy ekran znajduje się w tym samym kontenerze nawigacji co ekran.
 * @property {string} title -Napis który wyświetliu się pod przyciskiem.

 */
export const SettingsButton = ({navigation}) => {
=======
        familyOfIcons="Foundation"
        icon="x-circle"
        destination="DeleteAccount"
        title="Usuń konto"
        />
    )
}
// przycisk "Odtowaruj"
export const RemoveStockedArticleButton = ({ navigation }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="yellow"
      src={require("../assets/articleMenuPage/emptyBox.png")}
      destination="ScanArticle"
      title="Odtowaruj"
    />
  );
};
// przycisk "Dotowaruj"
export const AddStockedArticleButton = ({ navigation }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="sand"
      src={require("../assets/articleMenuPage/filledBox.png")}
      destination="ScanLocation"
      title="Dotowaruj"
    />
  );
};


export const LocationInfoButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="gray"
        icon="info"
        destination="ScanLocation"
        title="Informacje"
        />
    )
}
export const LocationAddNewButton = ({navigation}) => {
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
    return(
        <RoundButton
        navigation={navigation}
        color="sand"
<<<<<<< HEAD
        icon="settings"
        destination="Raport"
        title="Ustawienia"
=======
        icon="plus"
        destination="LocationEditDelete"
        title="Dodaj"
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
        />
    )
}

<<<<<<< HEAD

//style
/**
 * Style
 * @typedef (Object) Style 
 * @property {number} marginHorizontal położenie marginesu (poziomo)
 * @property {number}  marginVertical położenie marginesu (pionowo)
 *@property {number} width szerokość
 *@property {number} height wysokość
 *@property {number} borderRadius zakrzywienie obramowania
 *@property {string} alignItems ustalenie połozenia
 *@property {string}  justifyContent przestrzeń między elementami
 *@property {number}  marginTop górny margines
 *@property {string}   textTransform wielkość czcionki
 *@property {number}   fontSize rozmiar czcionki
 *@property {string}  alignSelf wyrównanie elementu
 *@property {string}  backgroundColor kolor wypełnienia
 *@property {string} color kolor 
 *@property {string} fontWeight pogrubienie 


 */
const styles = StyleSheet.create({
     /**
     * Połozenie przycisku
     *  @property {number} marginHorizontal położenie marginesu (poziomo)
     * @property {number}  marginVertical położenie marginesu (pionowo)
     
     */
    buttonBox:{
        marginHorizontal: Dimensions.get('window').width * 0.03,
        marginVertical: Dimensions.get('window').width * 0.03,
    },
      /**
      *  Własciwości przycisku
      *  @property {number} width szerokość
      *  @property {number} height wysokość
      *  @property {number} borderRadius zakrzywienie obramowania
      *  @property {string} alignItems ustalenie połozenia
      *  @property {string} justifyContent przestrzeń między elementami
    
     */
    button:{
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        borderRadius: Math.ceil(Dimensions.get('window').width * 0.4),
        alignItems:'center',
        justifyContent:'center',

    },
     /**
      *  Napis na przycisku
       *@property {number}  marginTop górny margines
       *@property {string}   textTransform wielkość czcionki
       *@property {number}   fontSize rozmiar czcionki
       *@property {string}  alignSelf wyrównanie elementu
       *@property {string}  fontWeight pogrubienie elementu
      
    
     */
    buttonText:{
        marginTop: 5,
        textTransform:"uppercase",
        fontSize:24,
        fontWeight: "600",
        alignSelf: 'center'
    },
     /**
      *  Niebieski przycisk
      *@property {string}  backgroundColor kolor wypełnienia
     
     */
    buttonBlue:{
        backgroundColor: '#cee6f8'
    },
     /**
      *  Żółty przycisk
      *@property {string}  backgroundColor kolor wypełnienia
     */
    buttonYellow:{
        backgroundColor: '#ffc06f'
    },
    /**
      *  Szary przycisk
      *@property {string}  backgroundColor kolor wypełnienia
     */
    buttonGray:{
        backgroundColor: '#adc4d5'
    },
    /**
      *  Piaskowy przycisk
      *@property {string}  backgroundColor kolor wypełnienia
     */
    buttonSand:{
        backgroundColor: '#ffdbab'
    },
    /**
      *  Tekst niebieski
      *@property {string}  color kolor 
     */
    textBlue:{
        color: '#cee6f8'
    },
    /**
      *  Tekst żółty
      *@property {string}  color kolor 
     */
    textYellow:{
        color: '#ffc06f'
    },
    /**
      *  Tekst szary
      *@property {string}  color kolor 
     */
    textGray:{
        color: '#adc4d5'
    },
    /**
      *  Tekst piaskowy
      *@property {string}  color kolor 
     */
    textSand:{
        color: '#ffdbab'
    }
    
});
/**
   * Tablica Asocjacyjna, pozwalające na proceduralne dobieranie kolorów
   * @type {Array}
   */
const colors = {yellow: styles.buttonYellow, gray: styles.buttonGray, blue: styles.buttonBlue, sand: styles.buttonSand}
 /**
   * Tablica Asocjacyjna, pozwalające na proceduralne dobieranie kolorów tekstu
   * @type {Array}
   */
const textColors = {yellow: styles.textYellow, gray: styles.textGray, blue: styles.textBlue, sand: styles.textSand}
=======
// Przyciski w Zarządzaniu (Managment)
export const ArticleInfoButton = ({ navigation }) => {
  return (
    <RoundButton
      navigation={navigation}
      color="blue"
      icon="info"
      destination="ScanArticle"
      title="Informacje"
    />
  );
};


export const ReportsButton = ({ navigation }) => {
  return (
    <CustomRoundButton
      navigation={navigation}
      color="yellow"
      src={require("../assets/managmentPage/notepad.png")}
      destination=""
      title="Raporty"
    />
  );
};

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
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
