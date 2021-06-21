import React, {useEffect, useState}from "react";
import { ImageBackground, BackHandler, View, Text, Modal, TouchableOpacity, TouchableHighlight, ScrollView } from "react-native";
import {LogoutButton} from "../components/Buttons";
import {Tray} from '../components/Trays';
import {LocationButton, UsersButton, SettingsButton, PackageButton} from '../components/RoundButtons';
import { Container } from "../components/Containers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NotificationBox } from '../components/Notifications';




const kliknij = (text) => {
    console.log(text);
}

export default function Home({navigation}){


    const [showModal, setModal] = useState(false);


    // czas w milisekundach, po ktorym wyswietla sie powiadomienie o nadchodzacym zakonczeniu sesji
    let modalTime = 300000;

    // czas w milisekundach, po ktorym nastapi zakonczenie sesji od momentu wyswietlenia powiadomienia o zakonczeniu sesji
    let endSessionTime = 10000;

// setTimeout nie wykona się jeżeli apka działa w tle, więc póki co kompentuje żeby dało się jedynie wylogować przez przycisk
    // useEffect(() => {
    //     setTimeout(() => {        
    //         setModal(true);
    //         setTimeout(() => {
    //             AsyncStorage.removeItem("token");
    //             AsyncStorage.removeItem("user");                
    //             navigation.navigate("Login");
    //         }, endSessionTime)
    //     }, modalTime)            
    // }, []);


    //goback do poprawy
    const [previousScreen, setPreviousScreen] = useState("")

  
    
    // Blokuje przycisk cofania na urzadzeniu; blokuje przejscie z ekranu uzytkownika do ekranu logowania
    BackHandler.addEventListener("hardwareBackPress", () => {
        return true;
    })


    
    // User to obiekt zalogowanego uzytkownika, mozna dodac blok ponizszego kodu do kazdego ekranu, w ktorym wymagane sa informacje o zalogowanym
    // uzytkowniku

    // isReady to flaga, ktora informuje czy dane pobrane z AsyncStorage sa juz gotowe do uzycia
    const [user, setUser] = useState({});
    const [isReady, setReady] = useState(false);

    if (!isReady) {
        AsyncStorage.getItem("user").then(user => {setUser(JSON.parse(user)); setReady(true);});
    }

    if (!isReady) {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text>Przetwarzanie danych...</Text>
            </View>
        );
    }

    const Logout = async () => {
    await AsyncStorage.removeItem("token"); 
    await AsyncStorage.removeItem("user"); 
    navigation.navigate("Login");
}



    return(
        <ScrollView contentContainerStyle={{ flex: 1 }}>
        <ImageBackground
          source={require("../assets/tlo_dodawanie.png")}
          style={{ flex: 1 }}
        >
          <Container composition="compact" spread="top">
            <Tray spread="right" composition="loose">
              <LogoutButton pressHandler={Logout}/>
            </Tray>

            <NotificationBox
            visibility={showModal}
            content={{message: `Sesja konczy sie za ${endSessionTime / 1000} sekund, zapisz swoje zmiany`}}
            visibilityHandler={setModal}
            />
            <Text>{previousScreen}</Text>
  
            <Container composition="compact" spread="center">
              <Tray spread="center" composition="compact">
                <PackageButton navigation={navigation} />
                <LocationButton navigation={navigation} />
              </Tray>
  
              <Tray spread="center" composition="compact">
                <UsersButton navigation={navigation} />
                <SettingsButton navigation={navigation} />
              </Tray>
            </Container>
          </Container>
        </ImageBackground>
      </ScrollView>
    
  );
}
