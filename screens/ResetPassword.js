import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  Text
} from "react-native";
import {
  NameInput,
  LocationCodeInput,
  ArticleCodeInput,
  DescriptionInput,
  LoginInput
} from "../components/Inputs.js";
import { MenuProvider } from "react-native-popup-menu";
import { NotificationBox } from "../components/Notifications";

import {CategorySelectEdit} from "../components/Selects"
import { SaveButton, CancelButton } from "../components/Buttons.js";
import { PasekNawigacyjny } from "../components/PasekNawigacyjny.js";
import { Container } from "../components/Containers.js";
import { Tray } from "../components/Trays.js";
import { forgotPassword } from "../clientRequests/Creq_lib";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Ekran edytowania towaru<br> 
 * posiada takie przyciski jak:<br>
 * - zapisz<br> 
 * - anuluj <br>
 * Można tu ustawić:
 * - Nazwę artykułu
 * - Kategorię
 * - Lokalizację
 * - Kod artykułu
 * - Opis artykułu  
 * @function ArticleEdit
 * @param {object} navigation pozwala na przenoszenie się między ekranami
 * @category Screens
 * @returns {JSX} Zwraca Ekran edytowania towaru w postaci elementu JSX
 */
export default function ResetPassword({ navigation }) {



  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

  const [login, setLogin] = useState("");
  

  const Send = () => {

    forgotPassword(
        {
          Login: login 
        })
        .then((notification)=>{
            navigation.navigate("Login", {notification: notification});
        })
        .catch((error)=>{
          setNotificationContent(error);
          setNotificationVisibility(true);
        });
  };
  const Cancel = () => {
    navigation.goBack();
  };



  return (
    // ScrollView to kontener, który pozwala przewijać ekran, gdy elementy nie mieszczą się na ekranie

    

    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Tray composition="compact" spread="center">
        <PasekNawigacyjny />
      </Tray>
      <ImageBackground
        source={require("../assets/tlo_dodawanie.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >

        <NotificationBox
        visibility={notificationVisibility}
        visibilityHandler={setNotificationVisibility}
        content={notificationContent}
        />




        <Container spread="center" composition="comapct">

        <Tray composition="compact" spread="center">
            <LoginInput 
            changeHandler={setLogin}
            />
        </Tray>
        
        <Container composition="comact" spread="bottom">
        <Tray spread="even" composition="loose">
        <SaveButton pressHandler={Send} />
            <CancelButton pressHandler={Cancel} />
        </Tray>
        </Container>
            

        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
