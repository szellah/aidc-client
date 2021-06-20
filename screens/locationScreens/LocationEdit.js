import React, {useState, useEffect} from "react";
import { StyleSheet, ImageBackground, ScrollView, Text } from "react-native";
import { CancelButton, SaveButton } from "../../components/Buttons.js";
import { PanelLokalizacjiZapiszAnuluj } from "../../components/PasekNawigacyjny.js";
import {
  FloorsSelect,
  BuildingSelect,
  RoomSelect,
} from "../../components/Inputs.js";
import { Tray } from "../../components/Trays";
import { Container } from "../../components/Containers";
import { addNewLocation, updateLocationInfo } from "../../clientRequests/Creq_lib.js";

import { NotificationBox } from "../../components/Notifications";

import AsyncStorage from "@react-native-async-storage/async-storage";



/**
 * Ekran Edytowania Lokalizacji<br>
 * Pozwala na wpisanie informacji o artykule w celu ich modyfikacji
 * jak i wstawienia nowej do bazy danych.
 * Można do niej przejść poprzez zeskanowanie odpowiedniej lokalizacji i naciśnięcie przycisku `Edytuj`,
 * bądź przez proces dodawania nowej lokalizacji.
 * @function LocationEdit
 * 
 * @category Screens
 * 
 * @returns {JSX} Zwraca ekran edycji lokalizacji w postaci elmentu JSX
 */
export default function LocationEdit({navigation}){

  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [locationCode, setLocationCode] = useState(0);

  const [phBuilding, setPhBuilding] = useState("");
  const [phFloor, setPhFloor] = useState("");
  const [phRoom, setPhRoom] = useState("");


  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

//wstawianie informacji jeżeli przyszły z innego ekranu
useEffect(() => {
  if(navigation.getParam('data'))
    {
      const location = navigation.getParam('data');
      console.log(location);
      setPhBuilding(location.Building.toString());
      setPhFloor(location.Floor.toString());
      setPhRoom(location.Room.toString());

      setLocationCode(location.LocationId);

      };
    },[navigation.getParam('data')]
);

   //zapisanie wartości podstawowych do wartości wysyłanych
   useEffect(()=>{

    setBuilding(phBuilding);
    setFloor(phFloor);
    setRoom(phRoom);

  },[phBuilding,phFloor,phRoom]
  );

  const [account, setAccount] = useState({});
  const [isReady, setReady] = useState(false);


  const Save = () => {
    if(navigation.getParam("previousScreen") === "LocationInfo")
    {
      const location = {
        LocationId: parseInt(locationCode),
        Building: parseInt(building),
        Floor: parseInt(floor),
        Room: parseInt(room)
        }
      updateLocationInfo(
      {
        AccountId: account.AccountId, 
        Location: location
      })
      .then((notification)=>{
        const destination = navigation.getParam("previousScreen");
        navigation.navigate(destination, {data: location, notification: notification});
      })
      .catch((error)=>{
        setNotificationContent(error);
        setNotificationVisibility(true);
      });
    }
    else if(navigation.getParam("previousScreen") === "LocationMenu")
    {
      
      const location = { 
        building: parseInt(building),
        floor: parseInt(floor),
        room: parseInt(room)
      }
      console.log(location);
      addNewLocation(
      {
        AccountId: account.AccountId, 
        Location: location
      })
      .then((notification)=>{
        const destination = navigation.getParam("previousScreen");
        navigation.navigate(destination, {data: location, notification: notification});
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
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Tray composition="compact" spread="center">
        <PanelLokalizacjiZapiszAnuluj />
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


          <BuildingSelect 
          placeholder={phBuilding}
          changeHandler={setBuilding}
          />

          <FloorsSelect 
          placeholder={phFloor}
          changeHandler={setFloor}
          />

          <RoomSelect 
          placeholder={phRoom}
          changeHandler={setRoom}
          />

          <Container composition="loose" spread="bottom">
            <Tray composition="loose" spread="even">
              <SaveButton pressHandler={Save} />
              <CancelButton pressHandler={Cancel} />
            </Tray>
          </Container>
        </Container>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  paseknagorze: {
    width: "100%",
    flexDirection: "row",
  },
  save: {
    position: "absolute",
    top: "90%",
    left: "2%",
    marginLeft: "3%",
  },
  select: {
    top: "25%",
    height: "10%",
    alignItems: "center",
  },
  cancel: {
    position: "absolute",
    top: "90%",
    right: "2%",
    marginRight: "3%",
  },

  Tło: {
    width: "100%",
    height: "100%",
  },
  tekst: {
    position: "absolute",
    left: "60%",
    top: "1%",
    color: "black",
    textAlign: "right",
    fontSize: 25,
  },
});
