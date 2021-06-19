import React, { useState, useEffect } from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";
import { Container } from "../../components/Containers";
import { Table } from "../../components/Table";
import { ScrollView } from "react-native-gesture-handler";
import { getAccountReport, getAccountInfo } from "../../clientRequests/Creq_lib";
import { NotificationBox } from "../../components/Notifications";


/**
 * Ekran tabeli użytkowników<br>
 * Dzięki temu ekranowi można szybko wybrać konkretnego użytkownika<br>
 * Pobiera on z bazy danych użytkowników i podaje ich dane w tabelce
 * 
 * @function Ekran tabeli użytkowników
 * @param {object} navigation - Sterowanie stosem nawigacji
 * @category userScreens
 * @returns {JSX} Zwraca ekran tabeli użytkowników w postaci elementu JSX
 */
export default function UsersTable({ navigation }) {

  const header = { column1: "Imię", column2: "Nazwisko", column3: "Login", id: "header" };
  const [users, setUsers] = useState([header]);

  const [notificationVisibility, setNotificationVisibility] = useState(false); 
  const [notificationContent, setNotificationContent] =useState({});

  
  const rowHandler = (accountId) =>{
    getAccountInfo(accountId)
    .then((data) => {
      if(data.error)
      {
        throw new Error(data.message)
      }
      else
      {
        navigation.navigate("UserInfo", {data: data.message, previousScreen: "UsersTable"});
      }
    })
    .catch((error) => {
      setNotificationContent(error);
      setNotificationVisibility(true);
    });
  }



 useEffect(() => {
  getAccountReport()
  .then((data) => {
    if(data.error)
    {
      throw new Error(data.message)
    }
    else
    {
    setUsers([ header, ...data.message]);
    }

  })
  .catch((error) => {
    setNotificationContent(error);
    setNotificationVisibility(true);
  });
 }, [navigation.getParam('notification'), navigation.getParam('data')]);

 useEffect(() => {
  if(navigation.getParam('notification'))
    {
      setNotificationContent(navigation.getParam('notification'));
      setNotificationVisibility(true);    
    }
}, [navigation.getParam('notification')]);


  return (
      <ImageBackground
        source={require("../../assets/backgrounds/blue_quater.png")}
        style={{ flex: 1, justifyContent: "center" }}
      >

        <NotificationBox
        visibility={notificationVisibility}
        visibilityHandler={setNotificationVisibility}
        content={notificationContent}
        />


        <Container>
          <View style={styles.titleBox}>
            <Text style={styles.title}>UŻYTKOWNICY</Text>
          </View>

          <Table
            toDisplay={users}
            clickable={true}
            pressHandler={rowHandler}
          />
        </Container>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 43,
    marginVertical: 10,
  },
  titleBox: {
    flexDirection: "row",
    justifyContent: "center",
    height: "20%",
  },
});
