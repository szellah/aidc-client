import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import NotificationBox from '../components/NotificationBox';

export default function Home({ navigation }){

    const Creq_lib = require('../clientRequests/Creq_lib');

    const [sendId, setSendId] = useState(0);
    const [notificationVisibility, setNotificationVisibility] = useState(false);
    const [notificationContent, setNotificationContent ] =useState({});


    {/* Wiązanka obietnic (Promise) która wpierw pobiera dane, następnie wstawia je do wiadomości i pod koniec ją wyświetla */}
    const displayNotificaiton = () => {

        Creq_lib.test(sendId)
        .then(resolve => setNotificationContent(resolve))
        .then(setNotificationVisibility(true));

    }

    return(
    <View style={styles.container}>

        {/* Pudełko w którym mogą się pojawić powiadomienia */}
        <NotificationBox 
        visibility={notificationVisibility} 
        VisibilityHandler={ setNotificationVisibility } 
        content={notificationContent}
        />


        {/* Input tekstowy */}
      <TextInput
      style={styles.input} 
      placeholder='wpisz tu liczbę'
      onChangeText={(val) => {
        setSendId(val);
      }}
      />
      <View style={styles.button} ><Button onPress={ () => {navigation.push("Report", {id: sendId})}} title='Raport'/></View>
      <View style={styles.button} ><Button onPress={ displayNotificaiton } title='Powiadomienie'/></View>

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
    button: {
        marginVertical: 5,
    }
  });