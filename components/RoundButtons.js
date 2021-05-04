import React from "react";
import { Feather, Foundation, Ionicons } from '@expo/vector-icons';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions} from "react-native";


//Element po którym pseudo dziedziczy, dla reacta się na to mówi "zawieranie"
export const RoundButton = ({navigation, destination, icon, familyOfIcons, title, color}) => {
    
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate(destination);
          }}
        >

            <View style={styles.buttonBox}>
                <View style={[ styles.button, colors[color] ]}>
                    <Icon 
                    familyOfIcons = {familyOfIcons}
                    icon = {icon}
                    />
                </View>
                <Text
                style={[ styles.buttonText, textColors[color] ]}
                >
                    {title}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

export const Icon = ({familyOfIcons, icon}) => {
    if(familyOfIcons == null)
        return(<Feather name={icon} size={Dimensions.get('window').width * 0.18} color="white" />)
    else
    if(familyOfIcons == "Foundation")
        return(<Foundation name={icon} size={Dimensions.get('window').width * 0.25} color="white" />)
    else
    if(familyOfIcons == "Ionicons")
            return(<Ionicons name={icon} size={Dimensions.get('window').width * 0.25} color="white" />)
}



//poszczególne przyciski menu
export const PackageButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="yellow"
        icon="package"
        destination="Home"
        title="Towar"
        />
    )
}

export const LocationButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="gray"
        icon="map-pin"
        destination="Raport"
        title="Lokalizacja"
        />
    )
}

export const UsersButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="blue"
        icon="users"
        destination="Raport"
        title="Użytkownicy"
        />
    )
}

export const SettingsButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="sand"
        icon="settings"
        destination="Ustawienia"
        title="Ustawienia"
        />
    )
}

//poszczególne przyciski ustawień
export const ChangePasswordButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="yellow"
        familyOfIcons="Foundation"
        icon="lock"
        destination="ZmienHaslo"
        title="Zmień hasło"
        />
    )
}

export const InformationButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="gray"
        familyOfIcons="Ionicons"
        icon="information-circle-outline"
        destination="ZmienHaslo"
        title="Informacje"
        />
    )
}

export const DeleteAccountButton = ({navigation}) => {
    return(
        <RoundButton
        navigation={navigation}
        color="blue"
        familyOfIcons="Foundation"
        icon="x-circle"
        destination="UsunKonto"
        title="Usuń konto"
        />
    )
}

//style
const styles = StyleSheet.create({
    buttonBox:{
        marginHorizontal: Dimensions.get('window').width * 0.03,
        marginVertical: Dimensions.get('window').width * 0.03,
    },
    button:{
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        borderRadius: Math.ceil(Dimensions.get('window').width * 0.4),
        alignItems:'center',
        justifyContent:'center',

    },
    buttonText:{
        marginTop: 5,
        textTransform:"uppercase",
        fontSize:24,
        fontWeight: "600",
        alignSelf: 'center'
    },
    buttonBlue:{
        backgroundColor: '#cee6f8'
    },
    buttonYellow:{
        backgroundColor: '#ffc06f'
    },
    buttonGray:{
        backgroundColor: '#adc4d5'
    },
    buttonSand:{
        backgroundColor: '#ffdbab'
    },
    textBlue:{
        color: '#cee6f8'
    },
    textYellow:{
        color: '#ffc06f'
    },
    textGray:{
        color: '#adc4d5'
    },
    textSand:{
        color: '#ffdbab'
    }
    
});

const colors = {yellow: styles.buttonYellow, gray: styles.buttonGray, blue: styles.buttonBlue, sand: styles.buttonSand}
const textColors = {yellow: styles.textYellow, gray: styles.textGray, blue: styles.textBlue, sand: styles.textSand}