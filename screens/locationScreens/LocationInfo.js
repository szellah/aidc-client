import React from "react";
import {StyleSheet, View, ImageBackground} from "react-native";
import {EditButton,DeleteButton} from '../../components/Buttons.js';
import { PanelLokalizacjiEdytujUsun} from '../../components/PasekNawigacyjny.js';
import {FloorsSelect,BuildingSelect ,ArticleCodeInput,RoomSelect} from '../../components/Inputs.js';
import {Tray} from '../../components/Trays';
import { Container } from "../../components/Containers.js";


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
export default function LocationInfo(){
  return (
    <ImageBackground source={require('../../assets/tlo_dodawanie.png')} style={{flex: 1}}>

    <View style={styles.paseknagorze}>
        < PanelLokalizacjiEdytujUsun/>
    </View>

    <Container composition="loose" spread="top">
      <BuildingSelect/>
      <FloorsSelect/>
      <RoomSelect/>
      <ArticleCodeInput/>
     </Container>

     <Container composition="loose" spread="bottom">
      <Tray composition='loose' spread='even'>
        <EditButton/>
        <DeleteButton/>
      </Tray>
    </Container>


    </ImageBackground>
  );
}

  const styles=StyleSheet.create({
    paseknagorze:{
      width: '100%',
      flexDirection: 'row',
      
    }
  })