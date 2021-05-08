import React from "react";
import { View, StyleSheet } from "react-native";

//Takie kontenery zastępujące wiersze, dzięki którym łatwiej o układanie rzeczy na ekranie
/**
 * Siema co tam
 * @param {string} spread - takie coś, dowiesz się kiedys
 */
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
      trayCompactMarginTop:{
        width: "100%",
        marginTop: "15%",
      },
      trayLoose:{
        width: "86%",
        marginHorizontal: "7%",
        marginVertical: '4%'
      },
      trayBottom:{
        position: "absolute",
        top: "110%",
        width: "100%",
      }
  });

  //tablice asocjacyjne, pozwalające na proceduralne dobieranie stylów
  const spreads = {center: styles.trayCenter, left: styles.trayLeft, right: styles.trayRight, even: styles.trayEven};
  const compositions = {compact: styles.trayCompact, compactMarginTop: styles.trayCompactMarginTop, loose: styles.trayLoose, bottom: styles.trayBottom};