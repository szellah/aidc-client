import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";

export const PackageButton = (navigate) => {
    return(
        <TouchableOpacity
        PressHandler={() => {
            navigation.navigate("Dodawanie");
          }}
        >
            <View style={[styles.Button,{backgroundColor:'#ffc06f'}]}>
                <Image
                    source={require("../assets/package.png")}
                    style={styles.Icon}
                />
            </View>
            <Text
                style={[styles.TextS,{color:"#ff8c1a"}]}
            >
                Towar
            </Text>
        </TouchableOpacity>
    )
}

export const UsersButton = () => {
    return(
        <TouchableOpacity
        PressHandler={() => {
            navigation.navigate("Dodawanie");
          }}
        >
            <View style={[styles.Button,{backgroundColor:'#cee6f8'}]}>
                <Image
                    source={require("../assets/user.png")}
                    style={styles.Icon}
                />
            </View>
            <Text
                style={[styles.TextS,{color:"#cee6f8"}]}
            >
                Użytkownicy
            </Text>
        </TouchableOpacity>
    )
}

export const SettingButton = () => {
    return(
        <TouchableOpacity
        PressHandler={() => {
            navigation.navigate("Dodawanie");
          }}
        >
            <View style={[styles.Button,{backgroundColor:'#ffdbab'}]}>
                <Image
                    source={require("../assets/settings.png")}
                    style={styles.Icon}
                />
            </View>
            <Text
                style={[styles.TextS,{color:"#ffdbab"}]}
            >
                Ustawienia
            </Text>
        </TouchableOpacity>
    )
}

export const LocationButton = () => {
    return(
        <TouchableOpacity
        PressHandler={() => {
            navigation.navigate("Dodawanie");
          }}
        >
            <View style={[styles.Button,{backgroundColor:'#adc4d5'}]}>
                <Image
                    source={require("../assets/pin.png")}
                    style={styles.Icon}
                />
            </View>
            <Text
                style={[styles.TextS,{color:"#adc4d5"}]}
            >
                Lokalizacja
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Button:{
        height:130,
        width:130,
        borderRadius:100,
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center',
    },
    Icon:{
        height:60,
        width:60,
        marginTop: '25%',
    },
    TextS:{
        textTransform:"uppercase",
        textAlign:"center",
        fontSize:20,
        fontWeight:'600',
    }
});