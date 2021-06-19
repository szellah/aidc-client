import React, { Component, useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView
} from "react-native";
import { LocationCodeInput } from "../../components/Inputs.js";
import { ExportButton } from "../../components/Buttons.js";
import { Table } from "../../components/Table.js";
import {
  PasekNawigacyjny,
  PasekNawigacyjnyInfo,
} from "../../components/PasekNawigacyjny.js";
import { Container } from "../../components/Containers.js";
import { Tray } from "../../components/Trays";

import { NotificationBox } from "../../components/Notifications";



/**
 * Ekran Raportu<br>
 * Wyświetla się po naciśnięciu `Sporządź` w ekranie tworzenia raportu<br>
 * W zależnoności od danych które przyjdą z bazy danych może wyświetlać raport
 * z lokalizacji lub po kategorii.
 * @function Report
 * @category Screens
 * @returns {JSX}
 * Zwraca ekran z raportu w postaci elementu JSX
 */
export default function Report({navigation}) {

  const [report, setReport] = useState([
    { column1: "", column2: "Ładowanie...", column3: "", id: "header" },
  ]);

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

  const [title, setTitle] = useState("RAPORT");

  useEffect(()=>{
    if(navigation.getParam('data'))
    {
      setReport(navigation.getParam('data'));
    }
    if(navigation.getParam('title'))
    {
      setTitle(navigation.getParam('title'));
    }
}, [navigation.getParam('data'), navigation.getParam('title')]);


const Export = () => {

}


  return (
      <ImageBackground
        source={require("../../assets/backgrounds/blue_quater.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >

        <NotificationBox
        visibility={notificationVisibility}
        visibilityHandler={setNotificationVisibility}
        content={notificationContent}
        />

        <Container>
          <View style={styles.titleBox}>
            <Text style={styles.title}>{title}</Text>
          </View>

          <Table
            toDisplay={report}
            manyItems={true}
          />

            <Tray composition="loose" spread="center">
                <ExportButton
                  pressHandler={Export}
                />
              </Tray>
        </Container>
      </ImageBackground>
  );
}
const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 43,
    marginVertical: 30,
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "center",
    height: "15%",
  },
});
