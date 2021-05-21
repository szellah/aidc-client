import React from 'react';
import { TouchableOpacity, StyleSheet, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';



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


export const NameInput = () => {
	return(
		<Input
		icon="archive"
        placeholder="nazwa"
		color="yellow"
		/>
	);
}


export const LoginInput = () => {
	return (
		<Input
		icon="user"
        placeholder="login"
		color="blue"
		/>
	);
};




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

export const UserFirstnameInput = () => {
	return(
		<Input
		icon="user"
        placeholder="imię"
		color="yellow"
		/>
	);
}

export const UserSurnameInput = () => {
	return(
		<Input
		icon="user"
        placeholder="nazwisko"
		color="yellow"
		/>
	);
}

export const UserStateInput = () => {
	return(
		<Input
		icon="folder"
        placeholder="stan"
		color="yellow"
		/>
	);
}

export const UserRankInput = () => {
	return(
		<Input
		icon="folder"
        placeholder="ranga"
		color="yellow"
		/>
	);
}

export const UserLoginInput = () => {
	return(
		<Input
		icon="user"
        placeholder="login"
		color="yellow"
		/>
	);
}

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



export const ArticleCodeInput = ({pressHandler}) => {
	return (
		<Input
		icon="search"
		placeholder="kod"
		color="yellow"
		displayQRButton={true}
		pressHandler={pressHandler}
		/>
	);
}


export const LocationCodeInput = ({pressHandler}) => {
	return (
		<Input
		icon="map-marker"
        placeholder="lokalizacja"
		color="yellow"
		displayQRButton={true}
		pressHandler={pressHandler}
		/>
	);
};

//select, jeszcze nie zrobiony, usuniemy później Polekategoria



export const CategorySelect = () => {
	return (
		<Input
		icon="folder"
		placeholder="kategoria"
		color="yellow"
		/>
	);
}
export const BuildingSelect = () => {
	return (
		<Input
		icon="building"
		placeholder="budynek"
		color="yellow"
		/>
	);
}
export const FloorsSelect = () => {
	return (
		<Input
		icon="align-justify"
		placeholder="piętro"
		color="yellow"
		/>
	);
}
export const RoomSelect = () => {
	return (
		<Input
		icon="square-o"
		placeholder="pokój"
		color="yellow"
		/>
	);
}


export const BuildingSelect = () => {
	return (
		<Input
		icon="building"
		placeholder="budynek"
		color="yellow"
		/>
	);
}

export const FloorsSelect = () => {
	return (
		<Input
		icon="align-justify"
		placeholder="piętro"
		color="yellow"
		/>
	);
}

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




const colors = {yellow: styles.inputYellow, blue: styles.inputBlue};
const sizes = {small: styles.inputSmall, large: styles.inputLarge};