import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  ScrollView,
  Text
} from "react-native";
import {
  NameInput,
  LocationCodeInput,
  ArticleCodeInput,
  DescriptionInput,
} from "../../components/Inputs.js";
import { MenuProvider } from "react-native-popup-menu";
import { NotificationBox } from "../../components/Notifications";

import {CategorySelectEdit} from "../../components/Selects"
import { SaveButton, CancelButton } from "../../components/Buttons.js";
import { PasekNawigacyjny } from "../../components/PasekNawigacyjny.js";
import { Container } from "../../components/Containers.js";
import { Tray } from "../../components/Trays.js";
import { getArticleCategories, updateArticleInfo,  addNewArticle } from "../../clientRequests/Creq_lib";
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
export default function ArticleEdit({ navigation }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [locationCode, setLocationCode] = useState("");
  const [articleCode, setArticleCode] = useState("");
  const [description, setDescription] = useState("");

  const [phName, setPhName] = useState("");
  const [phCategoryId, setPhCategoryId] = useState("");
  const [phCategory, setPhCategory] = useState("");
  const [phLocationCode, setPhLocationCode] = useState("");
  const [phArticleCode, setPhArticleCode] = useState("");
  const [phDescription, setPhDescription] = useState("");

  const [categoryOptions, setCategoryOptions] = useState([]);

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

  useEffect(() => {
    getArticleCategories().then((options) => {
    setCategoryOptions(options.message);
  })
  .catch((error)=>{
    setNotificationContent(error);
    setNotificationVisibility(true);
  });
  },[]);

  
  

    //wstawianie informacji jeżeli przyszły z innego ekranu
    useEffect(() => {
      if(navigation.getParam('data'))
        {
          const article = navigation.getParam('data');

          setPhName(article.Name);

          setPhCategoryId("0");
          

          setPhCategory(article.Category);

          setPhLocationCode(article.LocationId.toString());


          setPhArticleCode(article.ArticleId.toString());

          setPhDescription(article.Description);

          };
        },[navigation.getParam('data')]
    );


    //zapisanie wartości podstawowych do wartości wysyłanych
    useEffect(()=>{
      setName(phName);

      setCategoryId(phCategoryId);

      setCategory(phCategory);

      setLocationCode(phLocationCode);

      setArticleCode(phArticleCode);

      setDescription(phDescription);

    },[phName,phCategoryId,phCategory,phLocationCode,phArticleCode,phDescription]
    );

    const CategorySelectHandler = (name, value) =>{
      setCategory(name);
      setCategoryId(value);
    }

  const Save = () => {
    console.log("siema");
    if(navigation.getParam("previousScreen") === "ArticleInfo")
    {
      const article = {
        ArticleId: parseInt(articleCode), 
          Name: name, 
          Category: category, 
          LocationId: parseInt(locationCode), 
          Description: description
        }
      updateArticleInfo(
      {
        UserId: 1, 
        article: article
      })
      .then((notification)=>{
        const destination = navigation.getParam("previousScreen");
        navigation.navigate(destination, {data: article, notification: notification});
      })
      .catch((error)=>{
        setNotificationContent(error);
        setNotificationVisibility(true);
      });
    }
    else if(navigation.getParam("previousScreen") === "ArticleMenu")
    {
      console.log("hej");
      const article = { 
        Name: name, 
        Category: category, 
        LocationId: parseInt(locationCode), 
        Description: description 
      }
      addNewArticle(
      {
        UserId: 1, 
        article: article
      })
      .then((notification)=>{
        const destination = navigation.getParam("previousScreen");
        navigation.navigate(destination, {data: article, notification: notification});
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
        <MenuProvider>
          <NameInput placeholder={phName} changeHandler={setName}/>

          <CategorySelectEdit
            changeHandler={CategorySelectHandler}
            placeholder={phCategory}
            text={category}
            options={categoryOptions}
          />

          <LocationCodeInput placeholder={ phLocationCode } changeHandler={(val) => {setLocationCode(val)}} pressHandler={() => {}} />

          <DescriptionInput placeholder={ phDescription } changeHandler={(val) => {setDescription(val)}} pressHandler/>

          <Container composition="compact" spread="bottom">
            <Tray composition="loose" spread="even">
              <SaveButton pressHandler={Save} />

              <CancelButton pressHandler={Cancel} />
            </Tray>
          </Container>

          </MenuProvider>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}
