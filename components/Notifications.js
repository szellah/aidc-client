import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

/** Powiadomienie typu informacyjne oraz o błędzie w jednym komponencie. */

export default function Notifications({ VisibilityHandler, message, color }) {
	return (
		<View style={[styles.notificationBox]}>
			<TouchableOpacity
				onPress={() => {
					VisibilityHandler(false);
				}}
			>
				<Entypo
					name="circle-with-cross"
					size={24}
					color="#d2d2d2"
					style={[styles.cross]}
				/>
			</TouchableOpacity>

			<Text style={colors[color]}>{message}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	notificationBox: {
		height: '15%',
		backgroundColor: '#faf3ea',
		padding: 5,
		margin: 10,
		textAlign: 'center',
		borderRadius: 20,
		marginTop: '5%',
	},
	textOrange: {
		color: 'orange',
		fontSize: 24,
		width: '100%',
		textAlign: 'center',
		marginTop: '0 auto',
	},
	textRed: {
		color: 'tomato',
		fontSize: 24,
		width: '100%',
		textAlign: 'center',
		marginTop: '0 auto',
	},
	cross: {
		textAlign: 'right',
	},
});

const colors = { orange: styles.textOrange, red: styles.textRed };
