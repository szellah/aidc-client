import React from "react";
import { ImageBackground } from "react-native";
import {LogoutButton} from "../components/Buttons"
import {Tray} from '../components/Trays'
import {LocationButton, UsersButton, SettingsButton, PackageButton} from '../components/RoundButtons'
/**
 * Przycisk Kliknij
 * @param {string} text  - tekst przycisku
 
 */
const kliknij = (text) => {
    console.log(text);
}
  /**
    * Główny ekran po zalogowaniu = Home
    * @function Home
    * @param {object} navigation przejście między ekranami
    
    * @param {object} source Dodawanie tła na ekran
   
     *  @param {object} spread Ustawienie przycisków 
 
     * @param {object} LogoutButton  Ustawienie przycisku Wyloguj na ekranie
   
     * @param {object} PackageButton Ustawienie przycisku przejścia na ekranie

     * @param {object} LocationButton Ustawienie przycisku Lokalizacja na ekranie
     
     * @param {object} UsersButton  Ustawienie przycisku Użytkownicy na ekranie
     * @param {object} SettingsButton Ustawienie przycisku Ustawień na ekranie
     */
export default function Home({navigation})
{
    return(
      
        <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={{flex: 1}}>
  
        <Tray spread="right" composition="loose">
            <LogoutButton/>
        </Tray>
        <Tray spread="center" composition="compact">
         
            <PackageButton
            navigation={navigation}
            />
            <LocationButton
            navigation={navigation}
            />
        </Tray>
        <Tray spread="center" composition="compact">
            <UsersButton
            navigation={navigation}
            />
            <SettingsButton
            navigation={navigation}
            />
        </Tray>


        </ImageBackground>
    )
}