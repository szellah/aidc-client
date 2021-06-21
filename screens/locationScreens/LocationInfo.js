import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  KeyboardAvoidingView,
  Text
} from "react-native";
import { EditButton, DeleteButton } from "../../components/Buttons.js";
import { PanelLokalizacjiEdytujUsun } from "../../components/PasekNawigacyjny.js";
import {
  FloorsSelect,
  BuildingSelect,
  LocationCodeInput,
  RoomSelect,
} from "../../components/Inputs.js";
import { Tray } from "../../components/Trays";
import { Container } from "../../components/Containers.js";
import { deleteLocation } from "../../clientRequests/Creq_lib.js";

import { NotificationBox } from "../../components/Notifications";

import AsyncStorage from "@react-native-async-storage/async-storage";



/**
 * Ekran Informacji Lokalizacji<br>
 * Wyświetla informacje o lokalizacji i pozwala na usunięcie bądź edycje lokalizacji.
 * Można do niej przejść poprzez zeskanowanie odpowiedniej lokalizacji.
 * 
 * @function LocationInfo
 * 
 * @category Screens
 * 
 * @returns {JSX} Zwraca ekran informacyjny lokalizacji w postaci elmentu JSX
 */
export default function LocationInfo({navigation}){

  const [building, setBuilding] = useState("");
  const [floor, setFloor] = useState("");
  const [room, setRoom] = useState("");
  const [locationCode, setLocationCode] = useState("");

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});


  let location = null;

  //wstawianie informacji jeżeli przyszły z innego ekranu
  useEffect(() => {
    if(navigation.getParam('data'))
      {
        location = navigation.getParam('data');

        setBuilding("Budynek " + location.Building.toString());
        setFloor("Piętro " + location.Floor.toString());
        setRoom("Pokój " + location.Room.toString());
        setLocationCode(location.LocationId.toString())

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
    navigation.navigate("LocationEdit", {data: location, previousScreen: "LocationInfo"});
  };

  const [account, setAccount] = useState({});
  const [isReady, setReady] = useState(false);

  const Delete = () => {
      deleteLocation(
      {
        AccountId: account.AccountId, 
        locationId: locationCode
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
    <KeyboardAvoidingView
      behavior="height"
      style={{
        flexGrow: 1,
      }}
    >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <Tray composition="compact" spread="center">
          <PanelLokalizacjiEdytujUsun />
        </Tray>
        <ImageBackground
          source={require("../../assets/tlo_dodawanie.png")}
          style={{ flex: 1 }}
        >

          <NotificationBox
          visibility={notificationVisibility}
          visibilityHandler={setNotificationVisibility}
          content={notificationContent}
          />


          <Container spread="top" composition="comapct">
            <BuildingSelect text={building} />
            <FloorsSelect text={floor} />
            <RoomSelect text={room} />
            <LocationCodeInput text={locationCode}/>

            { account.Rank === 1 && <Container composition="loose" spread="bottom">
              <Tray composition="loose" spread="even">
                <EditButton pressHandler={Edit} />
                <DeleteButton pressHandler={Delete} />
              </Tray>
            </Container>}
          </Container>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  paseknagorze: {
    width: "100%",
    flexDirection: "row",
  },
});
