import React, {useEffect, useState} from "react";
import { ImageBackground, View, Text } from "react-native";
import { Tray } from "../../components/Trays";
import {
  UsersInfoButton,
  UserAddNewButton,
} from "../../components/RoundButtons";
import { PasekNawigacyjnyArticleMenu } from "../../components/PasekNawigacyjny.js";
import { Container } from "../../components/Containers";
import { ScrollView } from "react-native-gesture-handler";

import { NotificationBox } from "../../components/Notifications";

import AsyncStorage from "@react-native-async-storage/async-storage";


/**
 * Ekran menu zarzadzania użytkownikami<br>
 * Za pomocą tego ekranu można wybrać użytkownika lub dodać nowego użytkownika
 * 
 * @function Ekran menu zarządzania użytkownikami
 * @param {object} navigation - Sterowanie stosem nawigacji
 * @category userScreens
 * @returns {JSX} Zwraca ekran menu zarządania użytkownikami w postaci elementu JSX
 */
export default function UsersMenu({ navigation }) {

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});


  useEffect(() => {
    if(navigation.getParam('notification'))
    {
      setNotificationContent(navigation.getParam('notification'));
      setNotificationVisibility(true);    
    }
  }, [navigation.getParam('notification')]);


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
        <PasekNawigacyjnyArticleMenu navigation={navigation} />
      </Tray>
      <ImageBackground
        source={require("../../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >

<Text>{navigation.getParam('previousScreen')}</Text>

        <NotificationBox
        visibility={notificationVisibility}
        visibilityHandler={setNotificationVisibility}
        content={notificationContent}
        />

        <Container spread="center" composition="compact">
          <Tray spread="center" composition="compact">
            <UsersInfoButton navigation={navigation} />
          </Tray>

          { account.Rank === 1 && <Tray spread="center" composition="compact">
            <UserAddNewButton navigation={navigation} />
          </Tray>}
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
