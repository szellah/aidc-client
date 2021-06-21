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
    if(navigation.getParam('title'))
    {
      setTitle(navigation.getParam('title'));
    }
    if(navigation.getParam('data'))
    {
      setReport(navigation.getParam('data'));
    }
}, [navigation.getParam('data'), navigation.getParam('title')]);


const Export = () => {
  let error = null;
  const { saveFile } = require('../../handlers/saveFileToCSV');
  try{
    const d = new Date();
    const fileName = `raport-${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}-${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
    saveFile(fileName, report);
  }
  catch(e){
    error = e;
  }
  if(error){
    setNotificationContent({error: true, message: "Nie udało się pobrać raportu"});
    setNotificationVisibility(true);
  }
  else{
    setNotificationContent({error: false, message: "Pobrano raport"});
    setNotificationVisibility(true);
  }
  
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
    fontSize: 35,
    marginVertical: 20,
    textAlign: "center"
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "center",
    height: "17%",
  },
});
