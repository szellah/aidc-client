import React from "react";
import { ImageBackground } from "react-native";
import {LogoutButton} from "../components/Buttons"
import {Tray} from '../components/Trays'
import {LocationButton, UsersButton, SettingsButton, PackageButton} from '../components/RoundButtons'
/**
 * Przycisk Kliknij
 * @param {string} text  - tekst przycisku
 * @returns {string} - Całość tekstu
 */
const kliknij = (text) => {
    console.log(text);
}
/**
 * Główny ekran po zalogowaniu = Home
 * @function Home
 * @param {object} navigation przejście między ekranami
 * @returns {object} ekran 
 */
export default function Home({navigation})
{
    return(
       /**
     * Umieszczenie grafiki i przycisków na ekranie 
     */
    /**
     *  Dodawanie tła na ekran
     * @param {object} source
     */
    /**
     * Ustawienie przycisków 
     *  @param {object} spread 
     */
    /**
     * Ustawienie przycisku Wyloguj na ekranie
     * @param {object} LogoutButton  
     */
    /**
     *  Ustawienie przycisku przejścia na ekranie
     * @param {object} PackageButton
     */
    /**
     * Ustawienie przycisku Lokalizacja na ekranie
     * @param {object} LocationButton 
     */
    /**
     * Ustawienie przycisku Użytkownicy na ekranie
     * @param {object} UsersButton 
     */
    /**
     * Ustawienie przycisku Ustawień na ekranie
     *  @param {object} SettingsButton 
     */
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