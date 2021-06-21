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
import { Tray } from "../../components/Trays";
import {
  PasekNawigacyjny,
  PasekNawigacyjnyInfo,
} from "../../components/PasekNawigacyjny.js";
import {
  ChangePasswordButton,
  DeleteAccountButton,
  AccountInfoButton,
} from "../../components/RoundButtons";
import { Container } from "../../components/Containers";
import { NotificationBox } from "../../components/Notifications";

import AsyncStorage from "@react-native-async-storage/async-storage";





const kliknij = (text) => {
    console.log(text);
}
/**
 * Ekran ustawień<br>
 * Pozwala na:
 * - Wyświetlenie informacji o koncie użytkownika
 * - Przejście do ekranu zmiany haseł
 * - Rozpoczęcie procesu usuwania konta
 * @function SettingsMenu
 * @param {object} navigation Pozwala na przenosznie się między ekranami
 *
 * @category Screens
 *
 * @returns {JSX} Zwraca ekran ustawień w postaci elmentu JSX
 */

export default function SettingsMenu({ navigation }) {

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

  const [account, setAccount] = useState({});
  const [isReady, setReady] = useState(false);


  useEffect(() => {
    if(navigation.getParam('notification'))
      {
        setNotificationContent(navigation.getParam('notification'));
        setNotificationVisibility(true);    
      }
  }, [navigation.getParam('notification')]);

  const passAccountInfo = () =>{
    
    navigation.navigate("AccountInfo", {data: account, previousScreen: "SettingsMenu"});

  }

  if (!isReady) {
    AsyncStorage.getItem("user").then(account => {setAccount(JSON.parse(account)); setReady(true);});
}

if (!isReady) {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Przetwarzanie danych...</Text>
        </View>
    );
}

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Tray composition="compact">
        {/* Pasek nawigujący do sekcji "Home" */}
        <PasekNawigacyjnyInfo navigation={navigation} />
      </Tray>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >

<NotificationBox
        visibility={notificationVisibility}
        visibilityHandler={setNotificationVisibility}
        content={notificationContent}
        />


        <Container spread="center" composition="compact">
          <Tray spread="center" composition="compact">
            <ChangePasswordButton navigation={navigation} />
            {/* <AccountInfoButton navigation={navigation} pressHandler={passAccountInfo}/> */}
          </Tray>
          <Tray spread="center" composition="compact">
          <AccountInfoButton navigation={navigation} pressHandler={passAccountInfo}/>

            {/* <DeleteAccountButton navigation={navigation}/> */}
          </Tray>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  Tło: {
    width: "100%",
    height: "100%",
  },
  paseknagorze: {
    width: "110%",
    flexDirection: "row",
  },
  bezeksportu: {
    width: "100%",
    height: "80%",
  },
});
