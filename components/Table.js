import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Animated, TouchableOpacity} from 'react-native';

//Komponent wyświetlający tabelkę, o trzech kolumnach
//korzysta on z mapowania tablicy elementów wchodzących na obiekty JSX, czyli innymi słowy dla każdego elemntu w tablicy tworzy on wiersz w postaci xml
//dodatkowo posiada on skomplikowana logikę aktualizowania wysokości paska przesuwania
//toDisplay array object - tablica elementów do wyświetlenia w tabelce, informacje do zapasania w angłówkach muszą się znajdować w elemencie tablicy o key == header
//clickable bool - informacja o tym czy wiersze mają być klikalne
//pressHandler function - jeżeli wiersze są klikalne to pressHandler jest funkcją wykonywaną dla każdego wiersza po naciśnięciu
/**
 * 
 * Komponent wyświetlający tabelkę, o trzech kolumnach<br>
 * korzysta on z mapowania tablicy elementów wchodzących na obiekty JSX, <br>
 * czyli innymi słowy dla każdego elemntu w tablicy tworzy on wiersz w postaci xml<br>
 * dodatkowo posiada on skomplikowana logikę aktualizowania wysokości paska przesuwania<br>
 * 
 * @param {Array} toDisplay - tablica elementów do wyświetlenia w tabelce, informacje do zapasania w angłówkach muszą się znajdować w elemencie tablicy o key równym 'header'
 * @param {boolean} clickable - informacja o tym czy wiersze mają być klikalne
 * @param {function} pressHandler - jeżeli wiersze są klikalne to pressHandler jest funkcją wykonywaną dla każdego wiersza po naciśnięciu
 * 
 * @returns {JSX} zwraca tabelę jako element JSX
 * 
 * @category Root Components
 */
export function Table({toDisplay, clickable, pressHandler}) {


  function isHeader(value){
    return value.id=='header';
  }

  function isNotHeader(value){
    return value.id!='header';
  }

  const topRow = (toDisplay.filter(isHeader))[0];

  toDisplay = toDisplay.filter(isNotHeader);

  const [things, setThings] = useState(toDisplay)

  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : visibleScrollBarHeight;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight 
  ).interpolate({
    inputRange: [0, difference],
    outputRange: [0, difference],
    extrapolate: 'clamp'
  });


  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topColumnLeft}>{topRow.column1}</Text>
        <Text style={styles.topColumnCenter}>{topRow.column2}</Text>
        <Text style={styles.topColumnLeftRight}>{topRow.column3}</Text>
      </View>
      <View style={styles.listContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onContentSizeChange={height => {
            setCompleteScrollBarHeight(height);
          }}
          onLayout={({
            nativeEvent: {
              layout: { height }
            }
          }) => {
            setVisibleScrollBarHeight(height);
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
            { useNativeDriver: false }
          )}
        >
          { things.map((item) => {
            return (
              <View key={item.id}>
                <TouchableOpacity disabled={!clickable} onPress={()=>{pressHandler(item.id)}}>

                  <View style={[styles.row, rowColor[item.id % 2] ]}>
                      <Text style={[styles.columnLeft, styles.textColumn]}>{item.column1}</Text>
                      <Text style={[styles.columnCenter, styles.textColumn]}>{item.column2}</Text>
                      <Text style={[styles.columnRight, styles.textColumn]}>{item.column3}</Text>
                  </View>

                  </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
          <View style={{ height: '100%', width: 27, backgroundColor: '#d5d6d7', borderRadius: 20}}>
              <Animated.View
                style={{
                  width: 27,
                  borderRadius: 20,
                  backgroundColor: '#e9eaea',
                  height: 40,
                  transform: [{ translateY: scrollIndicatorPosition }]
                }}
              />
          </View>
      </View>
    </View>
);

}

const styles = StyleSheet.create({
container: {
  width: '90%',
  backgroundColor: '#e1e3e4',
  padding: 5,
  flex: 1,
  borderRadius: 30,
  alignSelf: "center",
  marginVertical: 10,
},
listContainer: {
  marginTop:  10,
  flex: 1,
  flexDirection: 'row',
  marginBottom: 10,
},
columnLeft: {
  width: '32%',
  paddingLeft: 5,
  paddingVertical: 10,
  fontSize: 20,
},
columnRight: {
  width: '31%',
  paddingLeft: 5,
  paddingVertical: 10,
  fontSize: 20,
},
columnCenter: {
  width: '37%',
  paddingLeft: 5,
  paddingVertical: 10,
  fontSize: 20,
  borderLeftWidth: 2,
  borderRightWidth: 2,
  borderColor: '#c5c6c7',
  height: 50
},
top: {
  width: '100%',
  height: 50,
  backgroundColor: '#90a6c0',
  flexDirection: 'row',
  borderRadius: 40,
  padding: 2,
  color: 'white',
  textAlign: 'center',
},
topColumnLeftRight: {
  width: '33.33%',
  textAlign: 'left',
  paddingLeft: 15,
  fontSize: 24,
  borderLeftColor: 'white',
  color: 'white',
  paddingVertical: 4
},
topColumnLeft: {
  width: '30.5%',
  textAlign: 'center',

  fontSize: 24,
  borderLeftColor: 'white',
  color: 'white',
  paddingVertical: 4
},
topColumnCenter: {
  width: '33.33%',
  textAlign: 'center',
  fontSize: 24,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderColor: 'white',
  color: 'white',
  paddingVertical: 4,
},
textColumn:{
  color: 'white',
  textAlign: 'center',
},
row:{ 
width: '95%',
flexDirection: 'row',
marginVertical: 2,
marginLeft:10,
height: 50,
},
rowDark:{
  backgroundColor:  '#cacccd', 
},
rowLight:{
  backgroundColor: '#cdd0d3',
}
});


//tablica nie asocjacyjna, ale liczbowa, trzymająca kolory
const rowColor = [ styles.rowDark, styles.rowLight];