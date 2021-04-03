import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Home({ navigation }){

    
    const [sendId, setSendId] = useState(0);
    const { getAccountInfo } = require('../clientRequests/Creq_getAccountInfo');

    return(
    <View style={styles.container}>

      <TextInput
      style={styles.input} 
      placeholder='wpisz tu liczbę'
      onChangeText={(val) => {
        setSendId(val);
      }}
      />
      <Button onPress={ () => {navigation.push("Report", {id: sendId})}} title='Prześlij'/>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderColor: 'rgba(0,0,0,0.2)',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 5,
      padding: 10,
      marginVertical:10,
    },
  });