import React, { Component, useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import { Tray } from "../../components/Trays";
import {
  PasekNawigacyjny,
  PasekNawigacyjnyInfo,
} from "../../components/PasekNawigacyjny.js";
import {
  UserFirstnameInput,
  UserEmailInput,
  UserLoginInput,
  UserSurnameInput,
  UserStateInput,
  UserRankInput,
} from "../../components/Inputs.js";
import {
  EditButton,
  DeleteButton,
  ChangePasswordButton,
} from "../../components/Buttons";
import { Container } from "../../components/Containers";
import { NotificationBox } from "../../components/Notifications";
import { deleteUser, resetPassword } from "../../clientRequests/Creq_lib";

import AsyncStorage from "@react-native-async-storage/async-storage";



/**
 * Ekran informacyjny użytkownika<br>
 * Ten ekran pozwala na:
 * - pokazanie informacji o użytkowniku
 * - przejście do korespondującego panelu edycji użytkownika
 * - usunięcie użytkownika
 * - wysłanie możliwości na zmianę hasła
 * 
 * @function Ekran informacyjny użytkownika
 * @param {object} navigation - Sterowanie stosem nawigacji
 * @category userScreens
 * @returns {JSX} Zwraca ekran informacyjny użytkownika w postaci elementu JSX
 */
export default function UserInfo({navigation}){

  const [userId, setUserId] = useState(-1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");  
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState(0);
  const [rank, setRank] = useState(0);

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

  useEffect(() => {
    if(navigation.getParam('notification'))
      {
        setNotificationContent(navigation.getParam('notification'));
        setNotificationVisibility(true);    
      }
  }, [navigation.getParam('notification')]);


  let user = null;

  useEffect(() => {
    if(navigation.getParam('data'))
      {
        user = navigation.getParam('data');

        setName(user.Name);
        setSurname(user.Surname);
        setLogin(user.Login);
        setEmail(user.Email);
        setState(user.State);
        setRank(user.Rank);

        setUserId(user.AccountId);
      }
  });
  

  const [account, setAccount] = useState({});
  const [isReady, setReady] = useState(false);

  const ChangePassword = () => {


    resetPassword(
      {
        UserId: userId 
      })
      .then((notification)=>{
        setNotificationContent(notification);
        setNotificationVisibility(true);
      })
      .catch((error)=>{
        setNotificationContent(error);
        setNotificationVisibility(true);
      });
  }

  const Edit = () => {
    navigation.navigate("UserEdit", {data: user, previousScreen: "UserInfo"});
  };
  
  const Delete = () => {
    deleteUser(
    {
      UserId: account.AccountId, 
      UserToDelete: userId
    })
    .then((notification)=>{
      const destination = navigation.getParam("previousScreen");
      navigation.navigate(destination, { notification: notification });
    })
    .catch((error)=>{
      setNotificationContent(error);
      setNotificationVisibility(true);
    });
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

          <UserFirstnameInput text={name}/>

          <UserSurnameInput text={surname}/>

          <UserLoginInput text={login}/>

          <UserEmailInput text={email}/>

          <UserStateInput text={state === 1 ? "Stan aktywny" : "Stan nieaktywny"}/>

          <UserRankInput text={rank === 1 ? "Ranga administratorska" : "Ranga zwykła"}/>

          { account.Rank === 1 && (<><Tray spread="center" composition="loose">
            <ChangePasswordButton pressHandler={ChangePassword}/>
          </Tray>

          <Container composition="compact" spread="bottom">
            <Tray spread="even" composition="loose">
              <EditButton pressHandler={Edit} />
              <DeleteButton pressHandler={Delete} />
            </Tray>
          </Container></>)}
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
