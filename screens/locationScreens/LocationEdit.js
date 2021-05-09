import React from "react";
import {StyleSheet, View, ImageBackground} from "react-native";
import {CancelButton,SaveButton} from '../../components/Buttons.js';
import {PanelLokalizacjiZapiszAnuluj} from '../../components/PasekNawigacyjny.js';
import {FloorsSelect,BuildingSelect ,ArticleCodeInput,RoomSelect} from '../../components/Inputs.js';
import {Tray} from '../../components/Trays';
import {Container} from '../../components/Containers';

export default function LocationEdit(){
  return (
    <ImageBackground source={require('../../assets/tlo_dodawanie.png')} style={{flex: 1}}>

    <View style={styles.paseknagorze}>
        < PanelLokalizacjiZapiszAnuluj/>
    </View>

    <Container composition="loose" spread="top">
      <BuildingSelect/>
      <FloorsSelect/>
      <RoomSelect/>
      <ArticleCodeInput/>
     </Container>

     <Container composition="loose" spread="bottom">
      <Tray composition='loose' spread='even'>
        <SaveButton/>
        <CancelButton/>   
      </Tray>
    </Container>

    </ImageBackground>
  );
}

  const styles=StyleSheet.create({
    paseknagorze:{
      width: '100%',
      flexDirection: 'row',
      
    },
    save: {
        position:"absolute",
        top:'90%',
        left:'2%',
        marginLeft:'3%',
 
    },
    select: {
        top:'25%',
        height:'10%',
        alignItems: "center",

    },
    cancel: {
        position:"absolute",
        top:'90%',
        right:'2%',
        marginRight:'3%'
    },

    Tło: {
      width: '100%',
      height: '100%',      
    },
    tekst: {
      position: "absolute",
      left: '60%',
      top:'1%',
      color: 'black',
      textAlign:'right',
      fontSize: 25,
      
      
     

     

    }
  })