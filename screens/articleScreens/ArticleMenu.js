import React, {useState, useEffect} from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Tray } from "../../components/Trays";
import {
  AddArticleButton,
  ManagmentButton,
  RemoveStockedArticleButton,
  AddStockedArticleButton,
} from "../../components/RoundButtons";

import { NotificationBox } from "../../components/Notifications";

import { PasekNawigacyjnyArticleMenu } from "../../components/PasekNawigacyjny.js";
import { Container } from "../../components/Containers";
import { ScrollView } from "react-native-gesture-handler";

import {dislocateArticle, allocateArticle} from "../../clientRequests/Creq_lib";

import AsyncStorage from "@react-native-async-storage/async-storage";


/**
 * Ekran menu towarów<br>
 * pozwala na wybranie jednego z czterech menu:<br>
 * - Zarządzanie<br>
 * - Dodaj nowy Towar<br>
 * - Dodaj już istniejący Towar<br>
 * - Usuń Towar
 * @function ArticleMenu
 * @param {object} navigation Pozwala na przenoszenie się między ekranami
 * @category Screens
 * @returns {JSX} zwraca Ekran menu towarów w postaci elementu JSX
 */
export default function ArticleMenu({ navigation }) {

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

 
  useEffect(() => {
    if(navigation.getParam('notification'))
    {
      setNotificationContent(navigation.getParam('notification'));
      setNotificationVisibility(true);    
    }
  }, [navigation.getParam('notification')]);

  const dislocateHandler = ({code}) => {
    return new Promise((resolve, reject) => {
    dislocateArticle({
      ArticleId: code,
      AccountId: 1
    })
    .then((notification)=>{
      resolve(notification);  
    })
    .catch((error)=>{
      reject({error: true, error:error.message});
    });
  });
  }

  const allocateHandler = ({locationCode, articleCode}) => {
    console.log(locationCode);
    console.log(articleCode);
    return new Promise((resolve, reject) => {
      allocateArticle({
        ArticleId: articleCode,
        LocationId: locationCode
      })
      .then((notification)=>{
       resolve(notification);  
      })
      .catch((error)=>{
        reject({error: true, error:error.message});
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
        <PasekNawigacyjnyArticleMenu navigation={navigation} />
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
          {/* Przyciski w menu "Towar (Article)" nawigujące do nowych sekcji */}
          <Tray spread="center" composition="compact">
            <ManagmentButton navigation={navigation} />

            { account.Rank === 1 && <AddArticleButton navigation={navigation} />}


          </Tray>
          <Tray spread="center" composition="compact">
            <RemoveStockedArticleButton navigation={navigation} handler={dislocateHandler} />
            <AddStockedArticleButton navigation={navigation} handler={allocateHandler} />
          </Tray>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
