import React from "react";
import {StyleSheet, View, ImageBackground} from "react-native";
import {EditButton,DeleteButton} from '../components/Buttons.js';
import { PanelLokalizacjiEdytujUsun} from '../components/PasekNawigacyjny.js';
import {FloorsSelect,BuildingSelect ,ArticleCodeInput,RoomSelect} from '../components/Inputs.js';
import {Tray} from '../components/Trays';
/** 
 * Ekran z możliwością edycji lokalizacji dla obiektu
 * @function  LocalisationEditDelete() Ekran  główny 

 * @category Screens 
 * @returns {BuildingSelect} Zwraca ekran  wyboru budynku
 * @returns {FloorsSelect} Zwraca ekran  wyboru piętra
 * @returns {RoomSelect}Zwraca ekran  wyboru pokoju
 * @returns {ArticleCodeInput}Zwraca ekran  wyboru kodu
 * @returns {EditButton} Zwraca ekran Edytowania
 * @returns {DeleteButton} Zwraca ekran Usuwania
 * 
*/
export default function LocalisationEditDelete(){
  return (
    <ImageBackground source={require('../assets/tlo_dodawanie.png')} style={{flex: 1}}>

    <View style={styles.paseknagorze}>
        < PanelLokalizacjiEdytujUsun/>
    </View>

    <View style={{marginTop: '15%'}}>

      <BuildingSelect/> 
      <FloorsSelect/>
      <RoomSelect/>
      <ArticleCodeInput/>
     
      <Tray composition='loose' spread='even'>
        <EditButton/>
        <DeleteButton/>
      </Tray>

    </View>

    </ImageBackground>
  );
}

  const styles=StyleSheet.create({
    paseknagorze:{
      width: '100%',
      flexDirection: 'row',
      
    }
  })