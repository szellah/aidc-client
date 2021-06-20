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
  UserEmailInput
} from "../components/Inputs.js";
import { MenuProvider } from "react-native-popup-menu";
import { NotificationBox } from "../components/Notifications";

import {CategorySelectEdit} from "../components/Selects"
import { SaveButton, CancelButton } from "../components/Buttons.js";
import { PasekNawigacyjny } from "../components/PasekNawigacyjny.js";
import { Container } from "../components/Containers.js";
import { Tray } from "../components/Trays.js";
import { resetPassword } from "../clientRequests/Creq_lib";
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

  const [email, setEmail] = useState("");
  

  const Send = () => {

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
            <UserEmailInput 
            placeholder={email}
            changeHandler={setEmail}
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
