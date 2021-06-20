import React, { Component, useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
} from "react-native";
import { Tray } from "../../components/Trays";
import {
  PasekNawigacyjny,
  PasekNawigacyjnyInfo,
} from "../../components/PasekNawigacyjny.js";
import {
  EnterNewPasswordInput,
  EnterOldPasswordInput,
  RepeatNewPasswordInput,
} from "../../components/Inputs.js";
import { ChangeButton, CancelButton } from "../../components/Buttons";
import { Container } from "../../components/Containers";
import { ScrollView } from "react-native-gesture-handler";
import { NotificationBox } from "../../components/Notifications";
import { changeAccountPassword } from "../../clientRequests/Creq_lib";

import AsyncStorage from "@react-native-async-storage/async-storage";



/**
 * Ekran zmiany hasła<br>
 * Wyświetla się po wywołaniu w ekranie ustawień<br>
 * Należy:
 * - Wpisać bieżące hasło
 * - Wpisać dwukrotnie nowe hasło
 * - Zatwierdzić bądź anulować operację
 * @function ChangePassword
 * @param {object} navigation Pozwala na przenosznie się między ekranami
 *
 * @category Screens
 *
 * @returns {JSX} Zwraca ekran zmiany hasła w postaci elmentu JSX
 */

export default function ChangePassword({navigation}){


  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("")
  const [repeatedNewPassword, setRepeatedNewPassword] = useState("")

  const [account, setAccount] = useState({});
  const [isReady, setReady] = useState(false);

  const Change = () => {
    if(newPassword === repeatedNewPassword)
    {
      const SHA256 = require("crypto-js/sha256");
      if(SHA256(oldPassword).toString() === account.Password)
      {
          const SHA256 = require("crypto-js/sha256");
        changeAccountPassword(
        {
          userId: account.AccountId, 
          password: SHA256(newPassword).toString()
        })
        .then((notification)=>{
          navigation.navigate("Settings", { notification: notification });
        })
        .catch((error)=>{
          setNotificationContent(error);
          setNotificationVisibility(true);
        });
      }
      else{
        setNotificationContent({error: true, message: "wpisano błędne stare hasło"});
        setNotificationVisibility(true);
      }
      
    }
    else{
        setNotificationContent({error: true, message: "nowe hasło i hasło powtórzone nie zgadzają się ze sobą"});
        setNotificationVisibility(true);
    }
      
    };


  const Cancel = () => {
    navigation.goBack();
  };

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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Tray composition="compact">
        {/* Pasek nawigujący do sekcji */}
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

        <Container spread="top" composition="comapct">

            <EnterOldPasswordInput 
            changeHandler={setOldPassword}
            />
            
            <EnterNewPasswordInput
            changeHandler={setNewPassword}
            />

            <RepeatNewPasswordInput 
            changeHandler={setRepeatedNewPassword}
            />

          <Container composition="loose" spread="bottom">
            <Tray spread="even" composition="loose">
              <ChangeButton pressHandler={Change}/>
              <CancelButton pressHandler={Cancel}/>
            </Tray>
          </Container>
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
