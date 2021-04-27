import React from 'react';
import { StyleSheet, Text, View, TextInput, Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export const PoleHaslo = () => {
	return (
		<View style={styles.iconContainer_2}>
			<Icon
				name="lock"
				color="#000"
				size={30}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Hasło"
			/>
		</View>
	);
};

export const PoleLogin = () => {
	return (
		<View style={styles.iconContainer_2}>
			<Icon
				name="user"
				color="#000"
				size={30}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Login"
			/>
		</View>
	);
};

export const LokalizacjaRaport = () => {
	return (
		<View style={styles.iconContainer_1}>
			<Icon
				name="map-marker"
				color="#000"
				size={32}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Lokalizacja"
			/>
		</View>
	);
};

export const PoleKategoria = () => {
	return (
		<View style={styles.iconContainer_1}>
			<Icon
				name="folder"
				color="#000"
				size={28}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Kategoria"
			/>
		</View>
	);
};

export const PoleKod = () => {
	return (
		<View style={styles.iconContainer_1}>
			<Icon
				name="search"
				color="#000"
				size={27}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Kod"
			/>
			<TouchableOpacity>
				<Icon
					name="qrcode"
					color="#000"
					size={27}
					color="#fcfefc"
					style={{ marginRight: 10 }}
				/>
			</TouchableOpacity>
		</View>
	);
};

export const PoleLokalizacja = () => {
	return (
		<View style={styles.iconContainer_1}>
			<Icon
				name="map-marker"
				color="#000"
				size={30}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Lokalizacja"
			/>
			<TouchableOpacity>
				<Icon
					name="qrcode"
					color="#000"
					size={27}
					color="#fcfefc"
					style={{ marginRight: 10 }}
				/>
			</TouchableOpacity>
		</View>
	);
};

export const PoleNazwa = () => {
	return (
		<View style={styles.iconContainer_1}>
			<Icon
				name="archive"
				color="#000"
				size={28}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Nazwa"
			/>
		</View>
	);
};

export const PoleOpis = () => {
	return (
		<View style={styles.iconContainer_1}>
			<Icon
				name="file"
				color="#000"
				size={28}
				color="#fcfefc"
				style={{ marginRight: 10 }}
			/>
			<TextInput
				style={styles.inputStyle}
				autoCorrect={false}
				placeholder="Opis"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	NiebIn: {
		backgroundColor: '#8fa5be',
		borderColor: '#eff2f6',
	},
	PomaIn: {
		backgroundColor: '#fec786',
		borderColor: '#fec786',
	},
	iconContainer_1: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		width: '100%',
		height: '100%',
		paddingVertical: '3%',
		paddingHorizontal: 13,
		borderWidth: 1,
		borderRadius: 25,
		fontSize: 16,
    	backgroundColor: '#fec786',
		borderColor: '#fec786',
	},
	iconContainer_2: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		width: '100%',
		height: '100%',
		paddingVertical: '3%',
		paddingHorizontal: 13,
		borderWidth: 1,
		borderRadius: 25,
		fontSize: 16,
    	backgroundColor: '#8fa5be',
		borderColor: '#8fa5be',
	},
	inputStyle: {
		flex: 1,
		width: "100%",
	},
});
//import {PoleHaslo, PoleLogin, LokalizacjaRaport, PoleKategoria, PoleKod, PoleLokalizacja, PoleNazwa, } from './Buttons.js';
