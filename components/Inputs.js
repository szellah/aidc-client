import React from 'react';
import { TouchableOpacity, StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';



//Input oraz QRbutton z którego dziedziczą różne inputy, dla reacta się na to mówi "zawieranie"

/**
 * Początkowy Input, który jest zawierany we wszystkich innych imputach.<br>
 * Można wybrać mu ikonę, napis wypełniający, kolor, rozmiar i inne.<br>
 * Posiada również możliwość przekazania funkcji do wykonania, po naciścięciu przycisku QR.
 * 	@function
 * 	@param {string} icon - nazwa ikony z czcionki FontAwesome
 *  @param {string} placeholder - nazwa wyświetlająca się przed wpisaniem wartości do Inputa
 *  @param {string} [placeholderTextColor] - kolor placeholdera w formię stringa css
 *  @param {string} color - kolor inputa, do wybour yellow i blue
 *  @param {string} size - rozmiar inputa, do wyboru small ilarge
 *  @param {boolean} [displayQRButton] - czy przycisk QR ma zostac wyświetlony
 *  @param {function} pressHandler - funkcja wywoływana podczas naciśnięcia przycisku QR 
 * 
 * 	@returns {JSX} zwraca input jako element JSX
 * 
 * 	@category Root Components
 */

export const Input = ({icon, placeholder, placeholderTextColor, color, size, displayQRButton, pressHandler, changeHandler, text, editable, password}) => {
	return (
		<View style={ [ styles.inputBox, sizes[size], colors[color] ] }>
			<Icon
				style={styles.inputIcon}
				name={icon}
				size={24}
				color="#fcfefc"
			/>
			<TextInput
				style={styles.inputText}
				autoCorrect={false}
				placeholder={placeholder}
				defaultValue={text}
				editable={typeof(changeHandler) === "function"}
				secureTextEntry={password}
				placeholderTextColor={placeholderTextColor == null ? "rgba(0,0,0,0.4)" : placeholderTextColor}
				multiline={size=="large"}
				onChangeText={(val) => {changeHandler(val)}}
			/>
			{displayQRButton&&(<QRButton pressHandler={pressHandler}/>)}
		</View>
	);
}

/**
 * 
 * Przycisk pozwalający na wywołanie przekazanej inputowi funkcji.<br>
 * Zazwyczaj będzie to wyświetlenie ekrany skanowania.
 * @function
 * @param {funciton} pressHandler - Funkcja do wywołania po naciśnięciu przycisku QR
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const QRButton = ({pressHandler}) => {
	return(
		<View style={{justifyContent:'center'}}>
			<TouchableOpacity 
			onPress={() => {
				pressHandler();
			}}
			>
				<Ionicons 
				name="qr-code-outline" 
				size={26} 
				color="#fcfefc" 
				/>
			</TouchableOpacity>
		</View>
	);
}

//Gotowe Inputy
/**
 * Input dla podania Nazwy Artykułu
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const NameInput = ({text, changeHandler, placeholder}) => {
	return(
		<Input
		icon="archive"
        placeholder={ placeholder ? placeholder : "Nazwa"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}
/**
 * Input, w którym podajemy login użytkownika.
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const LoginInput = ({text, changeHandler}) => {
	return (
		<Input
		icon="user"
		text={text}
        placeholder="login"
		color="blue"
		changeHandler={changeHandler}
		/>
	);
};

/**
 * Input, w którym podajemy poprawne hasło wymagane do zalogowania.
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const PasswordInput = ({changeHandler}) => {
	return (
		<Input
		icon="lock"
        placeholder="hasło"
		color="blue"
		size="small"
		password={true}
		changeHandler={changeHandler}
		/>
	);
};

/**
 * Input ,w którym podajemy stare hasło użytkownika.
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const EnterOldPasswordInput = ({changeHandler}) => {
	return (
		<Input
		icon="lock"
        placeholder="podaj stare hasło"
		placeholderTextColor="white"
		color="blue"
		size="small"
		changeHandler={changeHandler}
		password={true}
		/>
	);
};

/**
 * Input ,w którym wpisujemy nowe hasło dla bieżącego użytkownika.
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const EnterNewPasswordInput = ({changeHandler}) => {
	return (
		<Input
		icon="lock"
        placeholder="podaj nowe hasło"
		placeholderTextColor="white"
		color="blue"
		size="small"
		changeHandler={changeHandler}
		password={true}
		/>
	);
};

/**
 * Input, w którym potwierdzamy nowe hasło, aby dokonać ostatecznej zmiany.
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const RepeatNewPasswordInput = ({changeHandler}) => {
	return (
		<Input
		icon="lock"
        placeholder="powtórz nowe hasło"
		placeholderTextColor="white"
		color="blue"
		size="small"
		changeHandler={changeHandler}
		password={true}
		/>
	);
};

/**
 * Input, w którym potwierdzamy obecne hasło.
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const EnterPasswordInput = () => {
	return (
		<Input
		icon="lock"
        placeholder="podaj hasło"
		placeholderTextColor="white"
		color="blue"
		size="small"
		password={true}
		/>
	);
};

/**
 * Input, w którym wpisujemy ponownie obecne hasło.
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const RepeatPasswordInput = () => {
	return (
		<Input
		icon="lock"
        placeholder="powtórz hasło"
		placeholderTextColor="white"
		color="blue"
		size="small"
		password={true}
		/>
	);
};
////////////////////////////////////////////////

/**
 * Input dla podania Imienia Użytkownika
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const UserFirstnameInput = ({text, placeholder, changeHandler}) => {
	return(
		<Input
		icon="user"
        placeholder={ placeholder ? placeholder : "imie"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}

/**
 * Input dla podania Nazwiska użytkownika
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const UserSurnameInput = ({text, placeholder, changeHandler}) => {
	return(
		<Input
		icon="user"
        placeholder={ placeholder ? placeholder : "nazwisko"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}

/**
 * Input dla podania Stanu użytkownika
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const UserStateInput = ({text, placeholder, changeHandler}) => {
	return(
		<Input
		icon="folder"
        placeholder={ placeholder ? placeholder : "stan"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}

/**
 * Input dla podania Rangi Uzytkownika
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const UserRankInput = ({text, placeholder, changeHandler}) => {
	return(
		<Input
		icon="folder"
        placeholder={ placeholder ? placeholder : "ranga"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}

/**
 * Input dla podania Login Użytkownika
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const UserLoginInput = ({text, placeholder, changeHandler}) => {
	return(
		<Input
		icon="user"
        placeholder={ placeholder ? placeholder : "login"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}

/**
 * Input dla podania Email Użytkownika
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const UserEmailInput = ({text, placeholder, changeHandler}) => {
	return(
		<Input
		icon="envelope"
        placeholder={ placeholder ? placeholder : "e-mail"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}

//duży input

/**
 * Duży input, w którym podajemy opis 
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const DescriptionInput = ({text, placeholder, changeHandler}) => {
	return (
		<Input
		icon="file"
		color="yellow"
		placeholder={ placeholder ? placeholder : "opis"}
		text={text}
		size="large"
		changeHandler={changeHandler}
		/>
	);
}

//inputy korzystające z QR button

/**
 * Input do odczytania kodu QR danego artykułu
 * @function
 * @param {function} pressHandler - funkcja wywoływana podczas naciśnięcia przycisku QR 
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const ArticleCodeInput = ({pressHandler, text, changeHandler, placeholder}) => {
	return (
		<Input
		icon="search"
		placeholder={ placeholder ? placeholder : "kod"}
		text={text}
		color="yellow"
		displayQRButton={true}
		pressHandler={pressHandler}
		changeHandler={changeHandler}
		/>
	);
}

/**
 * Input do sprawdzania lokalizacji danego przedmiotu
 * @function
 * @param {function} pressHandler - funkcja wywoływana podczas naciśnięcia przycisku QR
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const LocationCodeInput = ({pressHandler, text, placeholder, changeHandler}) => {
	return (
		<Input
		icon="map-marker"
		placeholder={ placeholder ? placeholder : "lokalizacja"}
		text={text}
		color="yellow"
		displayQRButton={true}
		changeHandler={changeHandler}
		pressHandler={pressHandler}
		/>
	);
};

//select, jeszcze nie zrobiony, usuniemy później Polekategoria

/**
 * Select do wybrania kategorii po jakiej tworzony będzie raport
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const CategorySelect = ({text, placeholder, changeHandler}) => {
	return (
		<Input
		icon="folder"
		placeholder="kategoria"
		text={text}
		color="yellow"
		/>
	);
}

/**
 * Select do wybrania budynku z którego będzie sporzandzany raport
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const BuildingSelect = ({text, changeHandler, placeholder}) => {
	return (
		<Input
		icon="building"
        placeholder={ placeholder ? placeholder : "Budynek"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}

/**
 * Select do wybrania piętra z którego będzie sporzandzany raport
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const FloorsSelect = ({text, changeHandler, placeholder}) => {
	return (
		<Input
		icon="align-justify"
        placeholder={ placeholder ? placeholder : "Piętro"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}

/**
 * Select do wybrania pokoju z którego będzie sporzandzany raport
 * @function
 * 
 * @returns {JSX} zwraca input jako element JSX
 * 
 * @category Inputs
 * 
 */
export const RoomSelect = ({text, changeHandler, placeholder}) => {
	return (
		<Input
		icon="square-o"
        placeholder={ placeholder ? placeholder : "Pokój"}
		text={text}
		color="yellow"
		changeHandler={changeHandler}
		/>
	);
}




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




//style

const styles = StyleSheet.create({
	inputText: {
		textAlignVertical: 'top',
		marginLeft: '5%',
		color: '#faf3ea',
		flex: 1,
		width: "100%",
		fontSize: 22,
	},
	inputBox:{
		width: "86%",
     	marginHorizontal: "7%",
      	marginVertical: "4%",
		flexDirection: 'row',
		paddingVertical: 7,
		paddingHorizontal: 15,
		borderWidth: 1,
		borderRadius: 28,
	},
	inputIcon:{
		marginTop: 3,
	},
	inputSmall:{
		height: 49,
	},
	inputLarge:{
		height: 170
	}, 
	inputBlue:{
		backgroundColor: '#8fa5be',
		borderColor: '#eff2f6'
	},
	inputYellow:{
		backgroundColor: '#ffc06f',
		borderColor: '#ffc06f'
	}


});


//tablice asocjacyjne, pozwalające na proceduralne dobieranie stylów

const colors = {yellow: styles.inputYellow, blue: styles.inputBlue};

const sizes = {small: styles.inputSmall, large: styles.inputLarge};