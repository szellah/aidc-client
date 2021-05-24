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

export const Input = ({icon, placeholder, placeholderTextColor, color, size, displayQRButton, pressHandler}) => {
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
				placeholderTextColor={placeholderTextColor == null ? "rgba(0,0,0,0.4)" : placeholderTextColor}
				multiline={size=="large"}
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
export const NameInput = () => {
	return(
		<Input
		icon="archive"
        placeholder="nazwa"
		color="yellow"
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
export const LoginInput = () => {
	return (
		<Input
		icon="user"
        placeholder="login"
		color="blue"
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
export const PasswordInput = () => {
	return (
		<Input
		icon="lock"
        placeholder="hasło"
		color="blue"
		size="small"
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
export const EnterOldPasswordInput = () => {
	return (
		<Input
		icon="lock"
        placeholder="podaj stare hasło"
		placeholderTextColor="white"
		color="blue"
		size="small"
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
export const EnterNewPasswordInput = () => {
	return (
		<Input
		icon="lock"
        placeholder="podaj nowe hasło"
		placeholderTextColor="white"
		color="blue"
		size="small"
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
export const RepeatNewPasswordInput = () => {
	return (
		<Input
		icon="lock"
        placeholder="powtórz nowe hasło"
		placeholderTextColor="white"
		color="blue"
		size="small"
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
export const UserFirstnameInput = () => {
	return(
		<Input
		icon="user"
        placeholder="imię"
		color="yellow"
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
export const UserSurnameInput = () => {
	return(
		<Input
		icon="user"
        placeholder="nazwisko"
		color="yellow"
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
export const UserStateInput = () => {
	return(
		<Input
		icon="folder"
        placeholder="stan"
		color="yellow"
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
export const UserRankInput = () => {
	return(
		<Input
		icon="folder"
        placeholder="ranga"
		color="yellow"
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
export const UserLoginInput = () => {
	return(
		<Input
		icon="user"
        placeholder="login"
		color="yellow"
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
export const UserEmailInput = () => {
	return(
		<Input
		icon="envelope"
        placeholder="e-mail"
		color="yellow"
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
export const DescriptionInput = () => {
	return (
		<Input
		icon="file"
		color="yellow"
		placeholder="opis"
		size="large"
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
export const ArticleCodeInput = ({pressHandler, text}) => {
	return (
		<Input
		icon="search"
		placeholder={text}
		color="yellow"
		displayQRButton={true}
		pressHandler={pressHandler}
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
export const LocationCodeInput = ({pressHandler, text}) => {
	return (
		<Input
		icon="map-marker"
        placeholder={text}
		color="yellow"
		displayQRButton={true}
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
export const CategorySelect = () => {
	return (
		<Input
		icon="folder"
		placeholder="kategoria"
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
export const BuildingSelect = () => {
	return (
		<Input
		icon="building"
		placeholder="budynek"
		color="yellow"
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
export const FloorsSelect = () => {
	return (
		<Input
		icon="align-justify"
		placeholder="piętro"
		color="yellow"
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
export const RoomSelect = () => {
	return (
		<Input
		icon="square-o"
		placeholder="pokój"
		color="yellow"
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