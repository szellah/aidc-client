import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const axios = require('axios');
  const [message, setMessage] = useState('Tu pojawi się wiadomość');
  const [sendId, setSendId] = useState(0);
  

const getFromDB = () => {
  if(parseInt(sendId)){
  axios.post('http://192.168.1.80:8080', {
      id: parseInt(sendId)
  })
  .then(res => {
      const {Imie, Nazwisko} =  res.data;
      setMessage(`użytkownik: ${Imie} ${Nazwisko}`);
  })
  .catch(error => {
      console.error(error)
  })
}
}
  

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
      style={styles.input} 
      placeholder='wpisz tu liczbę'
      onChangeText={(val) => {
        setSendId(val);
      }}
      />
      <Button onPress={getFromDB} title='Prześlij'/>
    </View>
  );
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
