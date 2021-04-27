import React from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton_Dodaj = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer_dodaj}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
export const Dodaj = () => {
	return (
      <View>
        <AppButton_Dodaj style={styles.Dodaj} title="Dodaj" size="sm" backgroundColor="#007bff" />
      </View>
	);
}

const AppButton_Eksportuj = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer_eksportuj}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
export const Eksportuj = () => {
	return (
      <View>
        <AppButton_Eksportuj style={styles.Eksportuj} title="Eksportuj" size="sm" backgroundColor="#007bff" />
      </View>
	);
};

const AppButton_Wyloguj = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer_wyloguj}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
export const Wyloguj = () => {
	return (
      <View>
        <AppButton_Wyloguj style={styles.Wyloguj} title="Wyloguj" size="sm" backgroundColor="#007bff" />
      </View>
	);
};

const AppButton_Zaloguj = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer_zaloguj}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
export const Zaloguj = () => {
	return (
      <View>
        <AppButton_Zaloguj style={styles.Zaloguj} title="Zaloguj" size="sm" backgroundColor="#007bff" />
      </View>
	);
};

const styles = StyleSheet.create({
      Zaloguj:{
          backgroundColor: "#ff8c1a",
      },
      Eksportuj:{
          backgroundColor: "#ff8c1a",
      },
      appButtonContainer_dodaj: {
        width: 150,
        height: '33%',
        backgroundColor: "#8fa5be",
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: "flex-end",
        marginBottom: 20,
      },
      appButtonContainer_eksportuj: {
        width: 150,
        height: '33%',
        backgroundColor: "#fec786",
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 5,
        alignSelf: "flex-end",
        margin:'5%'
      },
      appButtonContainer_wyloguj: {
        width: 150,
        height: '33%',
        backgroundColor: "#B6B6B4",
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: "flex-end",
        marginBottom: 20,
      },
      appButtonContainer_zaloguj: {
        width: 150,
        height: '33%',
        backgroundColor: "#fec786",
        borderRadius: 40,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignSelf: "flex-end",
        marginTop: 30,
      },
      appButtonText: {
        fontSize: 20,
        color: "#fff",
        alignSelf: "center",
        textTransform: "uppercase"
      }
  });

