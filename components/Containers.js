import React from "react";
import { View, StyleSheet } from "react-native";

//Takie kontenery zastępujące kolumny, dzięki którym łatwiej o układanie rzeczy na ekranie w pionie
//spread string - informacja o tym jak wewnątrz obiektu mają być rozrzucone elementy, wybierane z listy [top, bottom, center, even]
//composition string - wielkości marginesów wybierane z listy [comapct, loose]
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