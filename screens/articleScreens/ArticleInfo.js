import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
} from "react-native";
import {
  NameInput,
  CategorySelect,
  LocationCodeInput,
  ArticleCodeInput,
  DescriptionInput,
} from "../../components/Inputs.js";
import { EditButton, DeleteButton } from "../../components/Buttons.js";
import { PasekNawigacyjny } from "../../components/PasekNawigacyjny.js";
import { ScrollView } from "react-native-gesture-handler";
import { Container } from "../../components/Containers.js";
import {Tray} from "../../components/Trays";
import { NotificationBox } from "../../components/Notifications";

import { deleteArticle } from "../../clientRequests/Creq_lib";


export default function ArticleInfo({ navigation }) {

  const [Name, SetName] = useState("");
  const [Category, SetCategory] = useState("");
  const [LocationCode, SetLocationCode] = useState("");
  const [ArticleCode, SetArticleCode] = useState("");
  const [Description, SetDescription] = useState("");

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});


  let article = null;

  //wstawianie informacji jeżeli przyszły z innego ekranu
  useEffect(() => {
    if(navigation.getParam('data'))
      {
        article = navigation.getParam('data');
        SetName(article.Name);
        SetCategory(article.Category);
        SetLocationCode(article.LocationId.toString());
        SetArticleCode(article.ArticleId.toString());
        SetDescription(article.Description);
      }
  });

  useEffect(() => {
    if(navigation.getParam('notification'))
      {
        setNotificationContent(navigation.getParam('notification'));
        setNotificationVisibility(true);    
      }
  }, [navigation.getParam('notification')]);

  const Edit = () => {
    navigation.navigate("ArticleEdit", {data: article, previousScreen: "ArticleInfo"});
  };
  const Delete = () => {
    console.log("hej");
      deleteArticle(
      {
        UserId: 1, 
        ArticleId: ArticleCode
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

  return (
    // ScrollView to kontener, który pozwala przewijać ekran, gdy elementy nie mieszczą się na ekranie
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Tray composition="compact" spread="center">
        <PasekNawigacyjny />
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

          <NameInput text={Name}/>

          <CategorySelect text={Category}/>

          <LocationCodeInput text={LocationCode} pressHandler={() => {}} />

          <ArticleCodeInput text={ArticleCode} pressHandler={() => {}} />

          <DescriptionInput text={Description} />

          <Container composition="compact" spread="bottom">
            <Tray composition="loose" spread="even">
              <EditButton pressHandler={Edit} />

              <DeleteButton pressHandler={Delete} />
            </Tray>
          </Container>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    flexDirection: "row",
    marginBottom: 40,
  },

  name: {
    marginBottom: "5%",
    height: 47,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
  },

  description: {
    height: "30%",
    alignItems: "flex-start",
  },

  bckg: {
    width: "100%",
    height: "100%",
  },
});
