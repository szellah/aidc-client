import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Entypo } from '@expo/vector-icons';

/** Powiadomienie typu informacyjne oraz o błędzie w jednym komponencie. */

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

export function InfoNotification({visibilityHandler, message}){
	return(
		<Notification
			visibilityHandler={visibilityHandler}
			message={message}
			color="orange"
		/>
	);
}

export function ErrorNotification({visibilityHandler, message}){
	return(
		<Notification
			visibilityHandler={visibilityHandler}
			message={JSON.stringify(message)}
			color="red"
		/>
	);
}

export function NotificationBox({visibility, visibilityHandler, content }) {
	/** Warunkowe otwieranie jednego z powiadomień (Błędu/ Informacji)  w obiekcie typu Modal */
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
		backgroundColor: '#faf300',
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
		color: 'tomato',
	},
	cross: {
		textAlign: 'right',
	},
});

const colors = { orange: {text: styles.textOrange, container: styles.notificationInfo } , red: { text: styles.textRed, container: styles.notificationError } };
