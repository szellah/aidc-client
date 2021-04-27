import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, Animated} from 'react-native';

export function Table() {

  const [things, setThings] = useState([
    { category: 'mebel', name: 'fotel', added: '21.01.2021', id: '1'},
    { category: 'mebel1', name: 'fotel', added: '21.01.2021', id: '2'},
    { category: 'mebel2', name: 'fotel', added: '21.01.2021', id: '3'},
    { category: 'mebel3', name: 'fotel', added: '21.01.2021', id: '4'},
    { category: 'mebel4', name: 'fotel', added: '21.01.2021', id: '5'},
    { category: 'mebel5', name: 'fotel', added: '21.01.2021', id: '6'},
  ])

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
        <Text style={styles.topColumnLeft}>kategoria</Text>
        <Text style={styles.topColumnCenter}>nazwa</Text>
        <Text style={styles.topColumnLeftRight}>dodano</Text>
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
                <View style={
                  { backgroundColor: item.id % 2 != 0 ? '#cacccd' : '#cdd0d3',
                    width: '95%',
                    flexDirection: 'row',
                    marginVertical: 2,
                    marginLeft:10,
                    height: 50,
                  }
                  }>
                  <Text style={styles.columnLeft}>{item.category}</Text>
                  <Text style={styles.columnCenter}>{item.name}</Text>
                  <Text style={styles.columnRight}>{item.added}</Text>
                  </View>
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
  width: '100%',
  backgroundColor: '#e1e3e4',
  padding: 5,
  flex: 1,
  borderRadius: 30,
},
listContainer: {
  marginTop:  10,
  flex: 1,
  flexDirection: 'row',
  marginBottom: 10,
},
columnLeft: {
  width: '32%',
  textAlign: 'left',
  paddingLeft: 5,
  paddingVertical: 10,
  fontSize: 20,
},
columnRight: {
  width: '31%',
  textAlign: 'left',
  paddingLeft: 5,
  paddingVertical: 10,
  fontSize: 20,
},
columnCenter: {
  width: '37%',
  textAlign: 'left',
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
});