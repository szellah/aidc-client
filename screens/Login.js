import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	ImageBackground,
	KeyboardAvoidingView,
	Image,
	Text,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NotificationBox } from '../components/Notifications';
import { PasswordInput, LoginInput } from '../components/Inputs.js';
import { LoginButton } from '../components/Buttons.js';
/**
 * Ekran logowania 
 * @function Login
 * @param {object} navigation  przejście między ekranami
 * @returns {object} ekran logowania
 */
export default function Login({ navigation }) {
	/**
	 * Creq_lib
	 * @param {string} require
	 */
	const Creq_lib = require('../clientRequests/Creq_lib');
     /**
	  * Nazwa użytkownika - Username
	 * @param {string} useState
	 */
	const [username, SetUsername] = useState('');
	/**
	 * Hasło użytkownika - password
	 * @param {string} useState
	 */
	const [password, SetPassword] = useState('');
	/**
	 * Widoczność powiadomień - notificationVisibility
	 * @param {boolean} useState
	 * @returns {boolean} false
	 */
	const [notificationVisibility, setNotificationVisibility] = useState(false);
	/**
	 * Treść powiadomienia - notificationContent
	 * @param {Array<string>} useState
	 */
	const [notificationContent, setNotificationContent] = useState({});

	/**
	 * Przycisk - Zapomniałem Hasło 
	 * @param {object} ForgotPassword - zapomniałem hasła - przypominanie
	 * @returns {string} przypomnienie hasła
	 */

	const ForgotPassword = () => {
		console.log('do zrobienia');
	};
/**
 * Zapytanie do serwera aby sprawdził dane i wygenerował token
 * @param {object} SendLoginData - zapytanie i sprawdzenie danych
 * @returns {object} generowanie tokenu
 */
	const SendLoginData = () => {
	
		Creq_lib.login(username, password).then((resolve) => {
			setNotificationContent(resolve);
			setNotificationVisibility(resolve.error != null);
			if (resolve.error == null) {
				SetUsername('');
				SetPassword('');
				// tymczasowo, aby łatwiej się poruszać
				navigation.navigate('Home');
			}
		});
	};

	return (
		<ScrollView
			contentContainerStyle={{
				flexGrow: 1,
				minHeight: '100%',
			}}
		>
			<KeyboardAvoidingView
				style={{
					flexGrow: 1,
				}}
			>
				<View style={styles.wrapper}>
					<NotificationBox
						visibility={notificationVisibility}
						content={notificationContent}
						VisibilityHandler={() => setNotificationVisibility(false)}
					></NotificationBox>
					<ImageBackground
						source={require('../assets/loginPage/LoginBackground.png')}
						style={styles.imageBackground}
					>
						<View style={styles.topContainer}>
							<Image
								style={styles.loginTitle}
								source={require('../assets/loginPage/LOGOWANIE.png')}
							/>
							<View style={styles.inputContainer}>
								<View style={styles.Login}>
									<LoginInput />
								</View>
								<View style={styles.Login}>
									<PasswordInput />
								</View>
								{/* tutaj wstawić nowe inputy */}
							</View>
						</View>
						<View style={styles.bottContainer}>
							<LoginButton />
							<TouchableOpacity onPress={ForgotPassword}>
								<Text style={{ fontSize: 16, color: '#a2b9d4' }}>
									Zapomniałem(am) hasła
								</Text>
							</TouchableOpacity>
						</View>
					</ImageBackground>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
}
/**
 * Kreator stylu 
 * @param {object} styles - kreowanie wyglądu ekranu i przycisków
 */
const styles = StyleSheet.create({
	wrapper: {
		flexGrow: 1,
	},
	imageBackground: {
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		resizeMode: 'cover',
	},
	topContainer: {
		width: '85%',
		maxWidth: 300,
		alignItems: 'center',
		padding: 10,
		paddingTop: 40,
		marginTop: 40,
	},
	loginTitle: {
		maxWidth: '80%',
		resizeMode: 'contain',
	},
	inputContainer: {
		width: '100%',
		marginTop: '10%',
	},
	bottContainer: {
		marginTop: 200,
		alignItems: 'center',
	},
	button: {
		maxWidth: 150,
	},
	imgButton: {
		resizeMode: 'contain',
		maxWidth: '100%',
	},
	Login: {
		width: '100%',
		height: '23%',
		margin: '3%',
		minHeight: 40,
	},
});
