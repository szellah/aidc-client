import React from "react";
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
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate(destination);
          }}
        >

            <View style={styles.buttonBox}>
                <View style={[ styles.button, colors[color] ]}>
                    <Feather name={icon} size={Dimensions.get('window').width * 0.18} color="white" />
                </View>
                <Text
                style={[ styles.buttonText, textColors[color] ]}
                >
                    {title}
                </Text>
            </View>

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
    return(
        <RoundButton
        navigation={navigation}
        color="yellow"
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
    return(
        <RoundButton
        navigation={navigation}
        color="gray"
        icon="map-pin"
        destination="Raport"
        title="Lokalizacja"
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

export const UsersButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="blue"
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
    return(
        <RoundButton
        navigation={navigation}
        color="sand"
        icon="settings"
        destination="Raport"
        title="Ustawienia"
        />
    )
}


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