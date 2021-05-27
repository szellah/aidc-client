import React, { useEffect, useState } from 'react';
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
import AsyncStorage from "@react-native-async-storage/async-storage";



export default function Login({ navigation }) {
	const Creq_lib = require('../clientRequests/Creq_lib');

	const [username, SetUsername] = useState('');
	const [password, SetPassword] = useState('');
	const [notificationVisibility, setNotificationVisibility] = useState(false);
	const [notificationContent, setNotificationContent] = useState({});


	// do zrobienia
	const ForgotPassword = () => {
		console.log('do zrobienia');
	};


	// Zapisuje pobrane dane(token i obiekt zalogowanego usera do urzadzenia)
	const SendLoginData = () => {
		Creq_lib.login(username, password).then(async (resolve) => {
			console.log(resolve.message);
			setNotificationContent(resolve);
			setNotificationVisibility(resolve.error != false);
			if (resolve.error == false) {
				SetUsername(username);
				SetPassword(password);				
				await AsyncStorage.setItem("token", resolve.message[0].token);
				await AsyncStorage.setItem("user", JSON.stringify(resolve.message[0]));
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
						visibilityHandler={setNotificationVisibility}
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
									{/* Do pobierania danych z inputow */}
									<LoginInput textInputHandler={SetUsername}/>
								</View>
								<View style={styles.Login}>
									{/* Do pobierania danych z inputow */}
									<PasswordInput textInputHandler={SetPassword}/>
								</View>
								{/* tutaj wstawić nowe inputy */}
							</View>
						</View>
						<View style={styles.bottContainer}>
							<LoginButton pressHandler={SendLoginData}/>
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
