import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';

/** Powiadomienie typu informacyjne oraz o błędzie w jednym komponencie. */
//Komponent powiadomienie, który zawiera się w komponentach powiadomienia Informacyjnego i Błędu
//visibiltyHandler object funkcja której zadaniem jest zmiana widoczności powiadomienia
//message string wiadomość którą chcemy wyświetlić
//color string szata koloryczna z listy kolorów: red, orange
export function Notification({ visibilityHandler, message, color }) {
	return (
		<View style={[styles.notification, colors[color]['container'] ]}>
			<TouchableOpacity
				onPress={() => {
					visibilityHandler(false);
				}}
			>
				<Entypo
					name="circle-with-cross"
					size={24}
					color="#d2d2d2"
					style={[styles.cross]}
				/>
			</TouchableOpacity>

			<Text style={[ styles.text, colors[color]['text']]}>{message}</Text>
		</View>
	);
}

//Powiadomienie Informacyjne, o łagodniejszym kolorze z własną logiką 
//visibiltyHandler object funkcja której zadaniem jest zmiana widoczności powiadomienia
//message string wiadomość którą chcemy wyświetlić
export function InfoNotification({visibilityHandler, message}){
	return(
		<Notification
			visibilityHandler={visibilityHandler}
			message={message}
			color="orange"
		/>
	);
}

//Powiadomienie Błędu, o ostrzejszym kolorze z własną logiką 
//visibiltyHandler object funkcja której zadaniem jest zmiana widoczności powiadomienia
//message string wiadomość którą chcemy wyświetlić
export function ErrorNotification({visibilityHandler, message}){
	return(
		<Notification
			visibilityHandler={visibilityHandler}
			message={JSON.stringify(message)}
			color="red"
		/>
	);
}

//Ekran powiadomień, w którym pojawiają się powiadomienia, jest przyciemniony dla doatkowego efektu. Po naciśnięciu na niego powaidomienie znika.
//W ekranie dochodzi do warunkowego otwierania jednego z powiadomień (Błędu/ Informacji)  w obiekcie typu Modal
//To jakie powiadomienie się pojawi zależy od wartości content.error, która jest informacją od serwera odnośnie tego czy doszło do błedu. 
//Niekiedy ta wartość jest również ustawiana na telefonie w moemencie wystapienia problemu z wykonaniem danej operacji, np. braku połączenia.
//visibility bool informacja czy ekran powiadomień ma się wyświetlać czy nie
//visibiltyHandler object funkcja której zadaniem jest zmiana widoczności powiadomienia
//content object stworzony zazwyczaj na serwerze pakiet danych z informacjami odnośnie wystąpienia błędów oraz danymi przesłanymi przez serwer.
export function NotificationBox({visibility, visibilityHandler, content }) {
	return (
		<Modal visible={visibility} transparent={true} animationType="fade">
			
			<TouchableWithoutFeedback 
			onPress={()=>{visibilityHandler(false)}}
			>

				<View style={styles.notificationBox}>
					{!content.error && (<InfoNotification visibilityHandler={visibilityHandler} message={content.message} />) }
					{content.error && (<ErrorNotification visibilityHandler={visibilityHandler} message={content.message} />) }
				</View>

			</TouchableWithoutFeedback>
		</Modal>
	);
}

const styles = StyleSheet.create({
	notificationBox:{ 
		width:"100%", 
		height:"100%" , 
		backgroundColor: "rgba(0,0,0,0.25)"
	},
	notification: {
		height: Dimensions.get('window').height * 0.15,
		padding: 5,
		margin: 10,
		textAlign: 'center',
		borderRadius: 20,
		marginTop: '5%',
	},
	notificationInfo:{
		backgroundColor: '#faf3ea',
	},
	notificationError:{
		backgroundColor: '#d07474',
	},
	text:{
		fontSize: 24,
		width: '100%',
		textAlign: 'center',
	},
	textOrange: {
		color: 'orange',
	},
	textRed: {
		color: 'white',
	},
	cross: {
		textAlign: 'right',
	},
});

//Tablica asocjacyjna pozwalająca na proceduralne zmieny szaty grtaficznej powiadomienia
const colors = { orange: {text: styles.textOrange, container: styles.notificationInfo } , red: { text: styles.textRed, container: styles.notificationError } };
