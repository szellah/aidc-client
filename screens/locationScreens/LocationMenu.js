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
import { Container } from "../../components/Containers.js";
import { PasekNawigacyjnyMenuLokalizacji } from "../../components/PasekNawigacyjny.js";
import {
  LocationInfoButton,
  LocationAddNewButton,
} from "../../components/RoundButtons.js";
import { Tray } from "../../components/Trays";
import { ScrollView } from "react-native-gesture-handler";
import { getLocationInfo } from "../../clientRequests/Creq_lib";

import { NotificationBox } from "../../components/Notifications";

import AsyncStorage from "@react-native-async-storage/async-storage";



/**
 * Ekran Menu Lokalizacji<br>
 * Pozwala na przemieszczenie się do Ekranu pozwalającego na dodanie nowej lokalizacji lub też
 * ekranu skanownia w celu wyświtlenia informacji o skanowanej lokalizacji
 * Można do niej przejść wybierając przycisk Lokalizacja w głównym Menu
 * 
 * @function LocationMenu
 * 
 * @category Screens
 * 
 * @returns {JSX} Zwraca ekran menu lokalizacji w postaci elmentu JSX
 */
export default function LocationMenu({ navigation }) {


  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});
  
  useEffect(() => {
    if(navigation.getParam('notification'))
    {
      setNotificationContent(navigation.getParam('notification'));
      setNotificationVisibility(true);    
    }
  }, [navigation.getParam('notification')]);

  const passToLocationInfoScreen = ({code}) =>{
    console.log(code);
    return new Promise((resolve, reject) => {
    getLocationInfo(code).then((response) =>{
          //handling błędu do Notification
          navigation.navigate('LocationInfo', {data: response.message, previousScreen: "ScanLocation"});
        }).catch((error) => {
          reject({error: true, message: error.message});
        });

    });
    
  }

  const [account, setAccount] = useState({});
  const [isReady, setReady] = useState(false);

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
        <PasekNawigacyjnyMenuLokalizacji navigation={navigation} />
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
          <Tray composition="compact" spread="center">
            <LocationInfoButton navigation={navigation} handler={passToLocationInfoScreen} />
          </Tray>

          { account.Rank === 1 && <Tray composition="compact" spread="center">
            <LocationAddNewButton navigation={navigation} />
          </Tray>}
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  paseknagorze: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 50,
  },
});
