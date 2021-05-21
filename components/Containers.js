import React from "react";
import { View, StyleSheet } from "react-native";

/**
 * Container to kontener zastępujący kolumnę, dzięki któremu łatwiej o układanie rzeczy na ekranie.<br>
 * Wszystkie elementy UI działają niczym stos. By móc ten stos przesuwać  ustawić wertykalnie potrzebny jest Container <br>
 * bo może ich być więcej niż jeden w wierszu. Do tego potrzebyn jest tray.
 *
 * @function
 * @param {string} spread - Rozrzucenie elmementów wewnątrz Tray, do wyboru top, bottom, center, even
 * @param {string} composition - Kompozycja marginesów wybierane z listy [comapct, loose]
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Root Components
 */
export const Container = ({spread, composition, children}) => {
  return(
    <View style={[ styles.containerBox, spreads[spread] , compositions[composition] ]}>
      {children}
    </View>
  );
}



const styles = StyleSheet.create({
        //tray
      containerBox:{
        flexDirection: 'column', 
        flex: 1,
        width: "100%",
      },
      //traySpread
      trayCenter:{
        justifyContent: 'center'
      },
      trayTop: {
        justifyContent: 'flex-start'        
      },
      trayBottom: {
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
        marginVertical: '7%'
      },
  });

  //tablice asocjacyjne, pozwalające na proceduralne dobieranie stylów
  const spreads = {center: styles.trayCenter, top: styles.trayTop, bottom: styles.trayBottom, even: styles.trayEven};
  const compositions = {compact: styles.trayCompact, loose: styles.trayLoose};