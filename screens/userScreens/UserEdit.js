import React, { Component, useState, useEffect } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	View,
	Image,
	ImageBackground,
	TextInput,
	ScrollView,
} from 'react-native';
import { Tray } from '../../components/Trays';
import {
	PasekNawigacyjny,
	PasekNawigacyjnyInfo,
} from '../../components/PasekNawigacyjny.js';
import {
  UserFirstnameInput,
  UserEmailInput,
  UserLoginInput,
  UserSurnameInput,
  UserStateInput,
  UserRankInput,
} from "../../components/Inputs.js";
import { SaveButton, CancelButton } from "../../components/Buttons";
import { Container } from "../../components/Containers";
import { addNewUser, updateUserInfo } from "../../clientRequests/Creq_lib";
import { NotificationBox } from "../../components/Notifications";
import { RankSelect } from "../../components/Selects";

import { MenuProvider } from "react-native-popup-menu";

import AsyncStorage from "@react-native-async-storage/async-storage";


/**
 * Ekran edycji użytkownika<br>
 * W tym ekranie można zmieniać dane użytkownika, co spowoduje edycję obecnych danych lub dodanie użytkownika
 * @function Ekran edycji użytkownika
 * @param {object} navigation - Sterowanie stosem nawigacji
 * @category userScreens
 * @returns {JSX} Zwraca ekran edycji użytkownika w postaci elementu JSX
 */
export default function UserEdit({navigation}){

  const [userId, setUserId] = useState(-1);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");  
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState(0);
  const [rank, setRank] = useState(0);

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

  const [account, setAccount] = useState({});
  const [isReady, setReady] = useState(false);

  const rankOptions = [
    { name: "Ranga administratorska", value: 1, id: 1 },
    { name: "Ranga zwykła", value: 2, id: 2 },
  ];

 
  const [rankText, setRankText] = useState("");

  const RankSelectHandler = (name, value) =>{
    setRankText(name);
    setRank(value);
  }


//wstawianie informacji jeżeli przyszły z innego ekranu
  const [phUserId, setPhUserId] = useState(-1);
  const [phName, setPhName] = useState("");
  const [phSurname, setPhSurname] = useState("");  
  const [phLogin, setPhLogin] = useState("");
  const [phEmail, setPhEmail] = useState("");
  const [phState, setPhState] = useState(0);
  const [phRank, setPhRank] = useState(0);

  useEffect(() => {
    if(navigation.getParam('data'))
      {
        const user = navigation.getParam('data');
        
        setPhName(user.Name);
        setPhSurname(user.Surname);
        setPhLogin(user.Login);
        setPhEmail(user.Email);
        setPhState(user.State);
        setPhRank(user.Rank);

        setUserId(user.AccountId);
  
        };
      },[navigation.getParam('data')]
  );

   //zapisanie wartości podstawowych do wartości wysyłanych
   useEffect(()=>{

    setName(phName);
    setSurname(phSurname);
    setLogin(phLogin);
    setEmail(phEmail);
    setState(phState);
    setRank(phRank);

  },[phName,phSurname,phLogin,phEmail,phState,phRank]
  );

  const Save = () => {
    if(navigation.getParam("previousScreen") === "UserInfo")
    {
      const user = {
        AccountId: userId,
        Name: name,
        Surname: surname,
        Login: login,
        Email: email,
        State: state,
        Rank: rank
        }
      updateUserInfo(
      {
        UserId: account.AccountId, 
        User: user
      })
      .then((notification)=>{
        const destination = navigation.getParam("previousScreen");
        navigation.navigate(destination, {data: user, notification: notification});
      })
      .catch((error)=>{
        setNotificationContent(error);
        setNotificationVisibility(true);
      });
    }
    else if(navigation.getParam("previousScreen") === "UsersMenu")
    {
      
      const user = { 
        Name: name,
        Surname: surname,
        Login: login,
        Email: email,
        State: 1,
        Rank: rank
      }
      addNewUser(
      {
        UserId: account.AccountId, 
        User: user
      })
      .then((notification)=>{
        const destination = navigation.getParam("previousScreen");
        navigation.navigate(destination, {data: user, notification: notification});
      })
      .catch((error)=>{
        setNotificationContent(error);
        setNotificationVisibility(true);
      });
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
        <MenuProvider>

        <Container spread="top" composition="comapct">
          <UserFirstnameInput 
          placeholder={phName}
          changeHandler={setName}
          />

          <UserSurnameInput 
          placeholder={phSurname}
          changeHandler={setSurname}
          />

          <UserLoginInput 
          placeholder={phLogin}
          changeHandler={setLogin}
          />

          <UserEmailInput 
          placeholder={phEmail}
          changeHandler={setEmail}
          />

          {/* <UserStateInput 
          placeholder={phState.toString()}
          changeHandler={setState}
          /> */}


          <RankSelect
            text={rankText}
            changeHandler={RankSelectHandler} 
            placeholder={phRank === 1 ? "Ranga administratorska" : "Ranga zwykła"}
            options={rankOptions} 
          />

          <Container composition="comact" spread="bottom">
            <Tray spread="even" composition="loose">
            <SaveButton pressHandler={Save} />
              <CancelButton pressHandler={Cancel} />
            </Tray>
          </Container>
        </Container>
        </MenuProvider>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
	Tło: {
		width: '100%',
		height: '100%',
	},
	paseknagorze: {
		width: '110%',
		flexDirection: 'row',
	},
	bezeksportu: {
		width: '100%',
		height: '80%',
	},
});
