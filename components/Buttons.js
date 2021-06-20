import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

//Elementy po których się pseudo dziediczy, dla reacta się na to mówi "zawieranie"
/**
 * Przycisk podstawowy, taki który zawierany jest w innych i pozweala na duże dopasowanie.<br>
 * Pozwala na dobranie tytułu, koloru, rozmiaru tak by elementy<br>
 * go zawierające mogły jak najlepiej oddawać wygląd prototypowy.<br>
 * Posiada również możliwość przekazania funkcji która zadziała po jego naciśnięciu.
 * @function
 * @param {string} title -tytuł wyświetlany na przycisku
 * @param {string} color -kolor przycisku, do wyboru yellow, green i blue
 * @param {string} size - rozmiar przycisku, do wyboru small i large
 * @param {function} pressHandler - funkcja wywołana po naciśnięciu przycisku
 * 
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Root Components
 */export const Button = ({ title, color, size, pressHandler }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        pressHandler();
      }}
    >
      <View style={[styles.buttonBox, colors[color], sizes[size]["button"]]}>
        <Text style={[styles.buttonText, sizes[size]["text"]]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

//Przyciski niebieskie
/**
 * Niebieski przycisk z napisem "Edytuj"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
export const EditButton = ({ pressHandler }) => {
  return (
    <Button
      title="Edytuj"
      color="blue"
      size="small"
      pressHandler={pressHandler}
    />
  );
};

/**
 * Niebieski przycisk z napisem "Usuń"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
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

/**
 * Niebieski przycisk z napisem "Zapisz"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
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

/**
 * Niebieski przycisk z napisem "Anuluj"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
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
/**
 * Żółty duży przycisk z napisem "Zaloguj"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
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

/**
 * Żółty duży przycisk z napisem "Eksportuj"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
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

/**
 * Żółty duży przycisk z napisem "Zatwierdź"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
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

/**
 * Żółty przycisk z napisem "Zmień"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
export const ChangeButton = ({pressHandler}) => {
  return(
    <Button
    title="Zmień"
    color="yellow"
    size="small"
    pressHandler={pressHandler}
    />
  );
}

/**
 * Żółty przycisk z napisem "Usuń"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
export const DeletYellowButton = ({pressHandler}) => {
  return(
    <Button
    title="Usuń"
    color="yellow"
    size="small"
    pressHandler={pressHandler}
    />
  );
}

/**
 * Żółty duży przycisk z napisem "Zamień Hasło"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
export const ChangePasswordButton = ({pressHandler}) => {
  return(
    <Button
    title="Zmień Hasło"
    color="yellow"
    size="large"
    pressHandler={pressHandler}
    />
  );
}


export const CreateButton = ({pressHandler}) => {
  return(
    <Button
    title="Sporządź"
    color="yellow"
    size="large"
    pressHandler={pressHandler}
    />
  );
}

//przyciski zielone
/**
 * Zielony przycisk z napisem "Wyloguj"
 * @function
 * @property {function} pressHandler funkcja wywołana po naciśnięciu przycisku
 * @returns {JSX} zwraca przycisk jako element JSX
 * 
 * @category Button
 */
export const LogoutButton = ({ pressHandler }) => {
  return (
    <Button
      title="Wyloguj"
      color="green"
      size="small"
      pressHandler={pressHandler}
    />
  );

};


const styles = StyleSheet.create({
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

