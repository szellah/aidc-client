import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";


//Elementy po których się pseudo dziediczy, dla reacta się na to mówi "zawieranie"
export const Button = ({ title, color, size, pressHandler }) => {
  return(
    <TouchableOpacity 
    onPress={() => {
      pressHandler();
    }}>
      <View style={[styles.buttonBox, colors[color], sizes[size]['button'] ]}>
        <Text style={[styles.buttonText, sizes[size]['text'] ]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

//Przyciski niebieskie

export const EditButton = ({pressHandler}) => {
  return(
    <Button
    title="Edytuj"
    color="blue"
    size="small"
    pressHandler={pressHandler}
    />
  );
}

export const DeleteButton = ({pressHandler}) => {
  return(
    <Button
    title="Usuń"
    color="blue"
    size="small"
    pressHandler={pressHandler}
    />
  );
}

//przyciski żółte

export const LoginButton = ({pressHandler}) => {
  return(
    <Button
    title="Zaloguj"
    color="yellow"
    size="large"
    pressHandler={pressHandler}
    />
  );
}

export const ExportButton = ({pressHandler}) => {
  return(
    <Button
    title="Eksportuj"
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

export const LogoutButton = ({pressHandler}) => {
  return(
    <Button
    title="Wyloguj"
    color="green"
    size="small"
    pressHandler={pressHandler}
    />
  );
}

const styles = StyleSheet.create({
      buttonBox:{
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center'
      },
      buttonText:{
        color: "#ffffff",
        textTransform: "uppercase"
      },//buttonColor
      buttonBlue:{
        backgroundColor: "#8fa5be",
      },
      buttonYellow:{
        backgroundColor: "#ffc06f",
      },
      buttonGreen:{
        backgroundColor: "#b3b7ba",
      },//buttonSize
      textSmall:{
        fontSize: 23,
      },
      buttonSmall:{
        width: 160,
        paddingVertical: 3,
      },
      textLarge:{
        fontSize: 28,
      },
      buttonLarge:{
        paddingHorizontal: 23,
        paddingVertical: 5,
      },


  });

  //tablice asocjacyjne, pozwalające na proceduralne dobieranie stylów
  const colors = {yellow: styles.buttonYellow, blue: styles.buttonBlue, green: styles.buttonGreen};
  const sizes = {small: {text: styles.textSmall, button: styles.buttonSmall}, large: {text: styles.textLarge, button: styles.buttonLarge} };
