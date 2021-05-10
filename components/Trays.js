import React from "react";
import { View, StyleSheet } from "react-native";

//Takie kontenery zastępujące wiersze, dzięki którym łatwiej o układanie rzeczy na ekranie
export const Tray = ({spread, composition, children}) => {
  return(
    <View style={[ styles.trayBox, spreads[spread] , compositions[composition] ]}>
      {children}
    </View>
  );
}



const styles = StyleSheet.create({
        //tray
      trayBox:{
        flexDirection: 'row', 
        width: "92%",
      },
      //traySpread
      trayCenter:{
        justifyContent: 'center'
      },
      trayLeft: {
        justifyContent: 'flex-start'        
      },
      trayRight: {
        justifyContent: 'flex-end'
      },
      trayEven: {
        justifyContent: 'space-evenly'
      },
      //margins
      trayCompact:{
        width: "100%",
      },
      trayLoose:{
        width: "86%",
        marginHorizontal: "7%",
        marginVertical: '4%'
      }


  });

  //tablice asocjacyjne, pozwalające na proceduralne dobieranie stylów
  const spreads = {center: styles.trayCenter, left: styles.trayLeft, right: styles.trayRight, even: styles.trayEven};
  const compositions = {compact: styles.trayCompact, loose: styles.trayLoose};