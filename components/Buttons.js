import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

//Elementy po których się pseudo dziediczy, dla reacta się na to mówi "zawieranie"
<<<<<<< HEAD
/**
 * Elementy które zawierają guziki
 * @function
 * @param {var} title -tytuł
 * @param {var} color -colory
 * @param {var} size - rozmiar
 * @param {var} pressHandler - wciśnięcie  
 * 
 * @returns {TouchableOpacity} zwraca nowy Guzik
 */
 export const Button = ({ title, color, size, pressHandler }) => {
  return(
    <TouchableOpacity 
    onPress={() => {
      pressHandler();
    }}>
      <View style={[styles.buttonBox, colors[color], sizes[size]['button'] ]}>
        <Text style={[styles.buttonText, sizes[size]['text'] ]}>{title}</Text>
=======
export const Button = ({ title, color, size, pressHandler }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        pressHandler();
      }}
    >
      <View style={[styles.buttonBox, colors[color], sizes[size]["button"]]}>
        <Text style={[styles.buttonText, sizes[size]["text"]]}>{title}</Text>
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
      </View>
    </TouchableOpacity>
  );
};

//Przyciski niebieskie
<<<<<<< HEAD
/**
 * Guzik do Edytowania
 * @function
 * @param {var} pressHandler wciścięcie
 * @property {string} title tytuł
 * @property {string} colour kolor
 * @property {string} sizes rozmiar
 * @property {var} pressHandler wciśnięcie
 * @returns {Button} zwraca Guzik Edytuj
 */
export const EditButton = ({pressHandler}) => {
  return(   
    
=======

export const EditButton = ({ pressHandler }) => {
  return (
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
    <Button
      title="Edytuj"
      color="blue"
      size="small"
      pressHandler={pressHandler}
    />
  );
<<<<<<< HEAD
}
/**
 * Guzik do Usuwania
 * @function
 * @param {var} pressHandler wciścięcie
 * @property {string} title tytuł
 * @property {string} colour kolor
 * @property {string} sizes rozmiar
 * @property {var} pressHandler wciśnięcie
 * @returns {Button} zwraca Guzik Usuń
 */
export const DeleteButton = ({pressHandler}) => {
=======
};

export const DeleteButton = ({ pressHandler }) => {
  return (
    <Button
      title="Usuń"
      color="blue"
      size="small"
      pressHandler={pressHandler}
    />
  );
};

export const SaveButton = ({ pressHandler }) => {
  return (
    <Button
      title="Zapisz"
      color="blue"
      size="small"
      pressHandler={pressHandler}
    />
  );
};

export const CancelButton = ({ pressHandler }) => {
  return (
    <Button
      title="Anuluj"
      color="blue"
      size="small"
      pressHandler={pressHandler}
    />
  );
};

//przyciski żółte

export const LoginButton = ({ pressHandler }) => {
  return (
    <Button
      title="Zaloguj"
      color="yellow"
      size="large"
      pressHandler={pressHandler}
    />
  );
};

export const ExportButton = ({ pressHandler }) => {
  return (
    <Button
      title="Eksportuj"
      color="yellow"
      size="large"
      pressHandler={pressHandler}
    />
  );
};

export const ConfirmButton = ({ pressHandler }) => {
  return (
    <Button
      title="Zatwierdź"
      color="yellow"
      size="large"
      pressHandler={pressHandler}
    />
  );
};

export const ChangeButton = ({pressHandler}) => {
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
  return(
    <Button
    title="Zmień"
    color="yellow"
    size="small"
    pressHandler={pressHandler}
    />
  );
}

<<<<<<< HEAD
//przyciski żółte
/**
 * Guzik do Logowania
 * @function
 * @param {var} pressHandler wciścięcie
 * @property {string} title tytuł
 * @property {string} colour kolor
 * @property {string} sizes rozmiar
 * @property {var} pressHandler wciśnięcie
 * @returns {Button} zwraca Guzik Zaloguj
 */
export const LoginButton = ({pressHandler}) => {
=======
export const DeletYellowButton = ({pressHandler}) => {
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
  return(
    <Button
    title="Usuń"
    color="yellow"
    size="small"
    pressHandler={pressHandler}
    />
  );
}
<<<<<<< HEAD
/**
 * Guzik do Edytowania
 * @function
 * @param {var} pressHandler wciścięcie
 * @property {string} title tytuł
 * @property {string} colour kolor
 * @property {string} sizes rozmiar
 * @property {var} pressHandler wciśnięcie
 * @returns {Button} zwraca Guzik Eksportuj
 */
export const ExportButton = ({pressHandler}) => {
=======

export const ChangePasswordButton = ({pressHandler}) => {
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
  return(
    <Button
    title="Zmień Hasło"
    color="yellow"
    size="large"
    pressHandler={pressHandler}
    />
  );
}

//przyciski zielone
<<<<<<< HEAD
/**
 * Guzik do Edytowania
 * @function
 * @param {var} pressHandler wciścięcie
 * @property {string} title tytuł
 * @property {string} colour kolor
 * @property {string} sizes rozmiar
 * @property {var} pressHandler wciśnięcie
 * @returns {Button} zwraca Guzik Wyloguj
 */
export const LogoutButton = ({pressHandler}) => {
  return(
=======

export const LogoutButton = ({ pressHandler }) => {
  return (
>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
    <Button
      title="Wyloguj"
      color="green"
      size="small"
      pressHandler={pressHandler}
    />
  );

};

/**
 * Style
 * @typedef (Object) styles
 * @property {number} borderRadius odstęp
 * @property {string} flexDirection układ
 * @property {string} justifyContent umiejscowienie zawartości 
 * @property {string} color kolor
 * @property {string} textTransform wielkość liter
 * @property {string} backgroundColor kolor wypełnienia
 * @property {number} fontSize wielkość czcionki
 * @property {number} width szerokość
 * @property {number} paddingVertical odstęp w pionie
 * @property {number} paddingHorizontal odstęp w poziomie 
 */
const styles = StyleSheet.create({
<<<<<<< HEAD
  /**
   * Pole Guzika
    *  @property {number} borderRadius odstęp
    * @property {string} flexDirection układ
    * @property {string} justifyContent umiejscowienie zawartości
   */

    buttonBox:{
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      /**
       * Text w guziku
       * @property {string} color kolor
       * @property {string} textTransform wielkość liter
       */
      buttonText:{
        color: "#ffffff",
        textTransform: "uppercase"
      },//buttonColor
      /**
       * Niebieski kolor Guzika
       * @property {string} backgroundColor kolor wypełnienia
       */
      buttonBlue:{
        backgroundColor: "#8fa5be",
      },
      /**
       * Żółty kolor Guzika
       * @property {string} backgroundColor kolor wypełnienia
       */
      buttonYellow:{
        backgroundColor: "#ffc06f",
      },
      /**
       * Zielony kolor Guzika
       * @property {string} backgroundColor kolor wypełnienia
       */
      buttonGreen:{
        backgroundColor: "#b3b7ba",
      },//buttonSize
      /**
       * Mała Czcionka
       * @property {number} fontSize wielkość czcionki
       */
      textSmall:{
        fontSize: 23,
      },   
      /**
       * Duża Czcionka
       *  @property {number} fontSize wielkość czcionki
       */  
      textLarge:{
        fontSize: 28,
      },
      /**
       * Duży Guzik
       * @property {number} paddingVertical odstęp w pionie
       * @property {number} paddingHorizontal odstęp w poziomie 
       */
      buttonLarge:{
        paddingHorizontal: 23,
        paddingVertical: 5,
      }, 
      /**
       * Mały Guzik
       * @property {number} width szerokość
       * @property {number} paddingVertical odstęp w pionie
       */
      buttonSmall:{
        width: 160,
        paddingVertical: 3,
      },


  });

  //tablice asocjacyjne, pozwalające na proceduralne dobieranie stylów
  /**
   * Tablica Asocjacyjna, pozwalające na proceduralne dobieranie Kolorów
   * @type {Array}
   */
  const colors = {yellow: styles.buttonYellow, blue: styles.buttonBlue, green: styles.buttonGreen};
  /**
   * Tablica Asocjacyjna, pozwalające na proceduralne dobieranie Rozmiaru
   * @type {Array}
   */
  const sizes = {small: {text: styles.textSmall, button: styles.buttonSmall}, large: {text: styles.textLarge, button: styles.buttonLarge} };
=======
  buttonBox: {
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    textTransform: "uppercase",
  }, //buttonColor
  buttonBlue: {
    backgroundColor: "#8fa5be",
  },
  buttonYellow: {
    backgroundColor: "#ffc06f",
  },
  buttonGreen: {
    backgroundColor: "#b3b7ba",
  }, //buttonSize
  textSmall: {
    fontSize: 23,
  },
  buttonSmall: {
    width: 160,
    paddingVertical: 3,
  },
  textLarge: {
    fontSize: 28,
  },
  buttonLarge: {
    paddingHorizontal: 23,
    paddingVertical: 5,
  },
});

//tablice asocjacyjne, pozwalające na proceduralne dobieranie stylów
const colors = {
  yellow: styles.buttonYellow,
  blue: styles.buttonBlue,
  green: styles.buttonGreen,
};
const sizes = {
  small: { text: styles.textSmall, button: styles.buttonSmall },
  large: { text: styles.textLarge, button: styles.buttonLarge },
};

>>>>>>> 1b663ccfc82caf1f79036e59c0a0eb591742fc69
