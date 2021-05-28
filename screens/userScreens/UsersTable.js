import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { Container } from "../../components/Containers";
import { Table } from "../../components/Table";
import { ScrollView } from "react-native-gesture-handler";

//Ekran Tabeli użytkowników, pozwala na szybki wybór użytkownika którego informacje zamierzamy wyświetlić, zmienić bądź usunąć. Ekran pobiera z bazy danych wszystkich użytkowników i podaje ich najważniejsze dane w tabelce.
//navigation object - obiekt sterowania stosem nawigacji
export default function UsersTable({ navigation }) {
  const users = [
    { column1: "Imię", column2: "Nazwisko", column3: "Login", id: "header" },
    { column1: "Tomasz", column2: "Karolak", column3: "TKarolak", id: "1" },
    { column1: "Borys", column2: "Szyc", column3: "BSzyc", id: "2" },
  ];

  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/backgrounds/blue_quater.png")}
        style={{ flex: 1 }}
      >
        <Container>
          <View style={styles.titleBox}>
            <Text style={styles.title}>UŻYTKOWNICY</Text>
          </View>

          <Table
            toDisplay={users}
            clickable={true}
            pressHandler={(destination) => {
              navigation.navigate("UserPanelEdit");
            }}
          />
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 43,
    marginVertical: 10,
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "center",
    height: "20%",
  },
});
